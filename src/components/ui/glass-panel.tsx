import * as React from "react"
import { cn } from "@/lib/utils"

/**
 * GlassPanel — DESIGN.md §4 Glassmorphism
 *
 * "For navigation bars and floating action buttons, use a Backdrop Blur (20px–30px)
 * combined with a semi-transparent surface color at 80% opacity."
 *
 * This allows the soft purples of the content beneath to "bleed" through,
 * maintaining the high-key, airy atmosphere.
 *
 * @example
 * <GlassPanel className="fixed top-0 inset-x-0 z-50 px-6 py-4">
 *   <nav>...</nav>
 * </GlassPanel>
 */
function GlassPanel({
  className,
  as: Tag = "div",
  ...props
}: React.ComponentProps<"div"> & {
  /** The HTML element or component to render as. Default: "div" */
  as?: React.ElementType
}) {
  return (
    <Tag
      data-slot="glass-panel"
      className={cn("ki-glass", className)}
      {...props}
    />
  )
}

export { GlassPanel }
