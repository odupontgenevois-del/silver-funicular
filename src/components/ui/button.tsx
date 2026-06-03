import { cn } from "@/lib/utils";
import { type ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 disabled:opacity-50",
          {
            "bg-amber-600 text-white hover:bg-amber-700 shadow-sm hover:shadow-md": variant === "default",
            "border border-stone-300 bg-white text-stone-800 hover:bg-stone-50 hover:border-stone-400": variant === "outline",
            "text-stone-700 hover:bg-stone-100": variant === "ghost",
          },
          {
            "text-sm px-4 py-2 rounded-lg": size === "sm",
            "text-base px-6 py-3 rounded-xl": size === "md",
            "text-lg px-8 py-4 rounded-xl": size === "lg",
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
