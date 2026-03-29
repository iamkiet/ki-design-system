import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const alertVariants = cva(
  "relative grid w-full grid-cols-[0_1fr] items-start gap-y-0.5 rounded-xl border-none px-6 py-4 text-sm has-[>svg]:grid-cols-[calc(var(--spacing)*5)_1fr] has-[>svg]:gap-x-3 [&>svg]:size-5 [&>svg]:translate-y-0.5 [&>svg]:text-current",
  {
    variants: {
      variant: {
        default: "bg-primary-container/30 text-on-primary-container",
        destructive:
          "bg-error-container/30 text-on-error-container",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Alert({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
  return (
    <div
      data-slot="alert"
      data-variant={variant ?? "default"}
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  )
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "col-start-2 line-clamp-1 min-h-4 font-bold tracking-tight",
        className
      )}
      {...props}
    />
  )
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        // Uses on-surface-variant for soft secondary text per DESIGN.md.
        // Destructive variant overrides this via parent data-variant selector in CSS.
        "col-start-2 grid justify-items-start gap-1 text-sm text-on-surface-variant [&_p]:leading-relaxed",
        // When inside a destructive alert, inherit the error container foreground
        "group-[]/destructive:text-on-error-container/80",
        "[div[data-variant=destructive]_&]:text-on-error-container/80",
        className
      )}
      {...props}
    />
  )
}

export { Alert, AlertTitle, AlertDescription }

