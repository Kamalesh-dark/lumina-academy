import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-base font-bold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0 font-display shadow-lg",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-xl hover:scale-105",
        kids: "bg-gradient-to-r from-coral-pink to-lavender text-white hover:shadow-xl hover:shadow-coral-pink/30 hover:scale-105 border-4 border-white",
        kidsOutline:
          "border-4 border-lavender bg-white text-lavender hover:bg-lavender/10 hover:scale-105",
        sunny: "bg-gradient-to-r from-sunny-yellow to-peach text-foreground hover:shadow-xl hover:shadow-sunny-yellow/30 hover:scale-105 border-4 border-white",
        mint: "bg-gradient-to-r from-sky-blue to-mint text-white hover:shadow-xl hover:shadow-sky-blue/30 hover:scale-105 border-4 border-white",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        playful:
          "bg-white border-4 border-cream text-foreground hover:border-lavender hover:scale-105 shadow-lg",
      },
      size: {
        default: "h-12 px-6 py-2",
        sm: "h-10 px-4 text-sm",
        lg: "h-14 px-8 text-lg",
        xl: "h-16 px-10 text-xl",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface AnimatedButtonProps
  extends Omit<HTMLMotionProps<"button">, "children">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  children?: React.ReactNode;
}

const AnimatedButton = React.forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    return (
      <motion.button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        whileHover={{ scale: 1.05, rotate: [-1, 1, -1, 0] }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);
AnimatedButton.displayName = "AnimatedButton";

export { AnimatedButton, buttonVariants };
