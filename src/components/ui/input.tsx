import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-12 w-full min-w-0 rounded-xl bg-surface-container-high px-4 py-3 text-sm transition-all outline-none placeholder:text-on-surface-variant/60 disabled:pointer-events-none disabled:opacity-50",
        "focus-visible:ring-2 focus-visible:ring-primary/20",
        className
      )}
      {...props}
    />
  )
}

export { Input }
