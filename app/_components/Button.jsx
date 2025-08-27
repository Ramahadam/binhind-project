"use client";

import clsx from "clsx";
/**
 * Reusable Button Component
 *
 * Props:
 * - variant: "primary" | "secondary" | "ghost" | "icon" (default: "primary")
 * - size: "sm" | "md" | "lg" (default: "md")
 * - icon: ReactNode (optional)
 * - iconPosition: "left" | "right" (default: "left")
 * - fullWidth: boolean
 * - className: extra tailwind classes
 * - ...props: any HTML button props
 */
export default function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "left",
  fullWidth = false,
  className,
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-sm font-medium transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-primary text-white hover:opacity-90",
    secondary:
      "bg-white text-primary border border-lightGray hover:bg-veryLightGray",
    ghost: "bg-transparent text-primary hover:bg-lightGray",
    icon: "bg-transparent text-primary",
  };

  const sizes = {
    sm: "px-2 py-1 text-p14",
    md: "px-3 py-2 text-p16",
    lg: "px-4 py-3 text-p18",
  };

  return (
    <button
      className={clsx(
        baseStyles,
        variants[variant],
        sizes[size],
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {icon && iconPosition === "left" && (
        <span className="mr-2 flex-shrink-0">{icon}</span>
      )}
      {children}
      {icon && iconPosition === "right" && (
        <span className="ml-2 flex-shrink-0">{icon}</span>
      )}
    </button>
  );
}
