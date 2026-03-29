"use client"

import * as React from "react"
import { Separator as SeparatorPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

/**
 * @deprecated Per DESIGN.md §5 "The No-Divider Rule":
 * "Never use lines to separate list items."
 * "Don't use 1px solid dividers or containment boxes."
 *
 * Use tonal background shifts instead:
 *   - `surface` → `surface_container_low` for subtle section changes
 *   - `surface_container_low` → `surface_container_high` for emphasis
 *
 * This component is retained for edge cases (e.g. inside menus/command palettes)
 * where a very subtle tonal line is unavoidable and uses `surface_container_high`
 * (not a visible border color).
 */
function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 bg-surface-container-high data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className
      )}
      {...props}
    />
  )
}

export { Separator }

