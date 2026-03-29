import * as React from "react"
import { cn } from "@/lib/utils"

function Skeleton({ className, style, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn(
        "animate-shimmer rounded-xl bg-[length:200%_100%]",
        className
      )}
      style={{
        backgroundImage: `linear-gradient(
          90deg,
          var(--ki-surface-container-highest) 0%,
          var(--ki-surface-container-high) 40%,
          var(--ki-primary-container) 50%,
          var(--ki-surface-container-high) 60%,
          var(--ki-surface-container-highest) 100%
        )`,
        ...style,
      }}
      {...props}
    />
  )
}

export { Skeleton }
