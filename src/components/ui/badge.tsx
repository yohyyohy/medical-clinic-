import type React from "react"

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outline"
}

export function Badge({ className = "", variant = "default", ...props }: BadgeProps) {
  const baseStyles = "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold"
  const variantStyles = {
    default: "bg-primary text-primary-foreground",
    outline: "border border-current",
  }

  return <div className={`${baseStyles} ${variantStyles[variant]} ${className}`} {...props} />
}

