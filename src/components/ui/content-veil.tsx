import * as React from "react"
import { cn } from "@/lib/utils"

/**
 * ContentVeil — DESIGN.md §5 "Featured Component: The Content Veil"
 *
 * A gradient overlay that fades content into the ether at the bottom of a
 * scroll container, creating a sense of infinite space.
 *
 * Usage: place as a direct child of a `relative` container that clips overflow.
 *
 * @example
 * <div className="relative overflow-hidden h-96">
 *   <p>Long editorial content...</p>
 *   <ContentVeil />
 * </div>
 */
function ContentVeil({
  className,
  height = "8rem",
  ...props
}: React.ComponentProps<"div"> & {
  /** Height of the veil gradient. Default: 8rem */
  height?: string
}) {
  return (
    <div
      data-slot="content-veil"
      aria-hidden="true"
      className={cn("ki-content-veil", className)}
      style={{ height, ...props.style }}
      {...props}
    />
  )
}

export { ContentVeil }
