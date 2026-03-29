import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-full text-sm font-bold whitespace-nowrap transition-all outline-none focus-visible:ring-2 focus-visible:ring-primary/20 disabled:pointer-events-none disabled:opacity-50 active:scale-95 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-on-primary hover:opacity-90",
        destructive:
          "bg-error text-on-error hover:opacity-90 focus-visible:ring-error/20",
        outline:
          "border border-outline-variant bg-transparent hover:bg-surface-container-low hover:text-on-surface",
        secondary:
          "bg-primary-container text-on-primary-container hover:opacity-90",
        ghost:
          "hover:bg-surface-container-high hover:text-on-surface",
        link: "text-primary underline-offset-4 hover:underline",
        tertiary: "text-primary font-bold text-[0.75rem] uppercase tracking-widest hover:opacity-70",
        /** DESIGN.md §2 "Glass & Gradient Rule" — 135° velvet gradient for CTAs */
        gradient: "ki-gradient-cta hover:opacity-90 shadow-[0_4px_20px_rgba(104,84,141,0.25)]",
      },
      size: {
        default: "h-11 px-8 py-3",
        sm: "h-9 px-6 py-2 text-xs",
        lg: "h-12 px-10 py-4 text-base",
        icon: "size-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
