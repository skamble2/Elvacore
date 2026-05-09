import type { ReactNode } from "react";

type Props<T> = {
  items: T[];
  /** Render each item. */
  children: (item: T, index: number) => ReactNode;
  /**
   * Tailwind grid-column utilities applied at sm+ breakpoints.
   * e.g. "sm:grid-cols-2 lg:grid-cols-4".
   */
  cols: string;
  /**
   * Width of each item on mobile (when the layout is a horizontal scroller).
   * Default `w-[82%]` shows one card with a hint of the next so the swipe
   * affordance is obvious.
   */
  mobileWidth?: string;
  /** Optional key extractor (defaults to `item.slug` if present, else index). */
  itemKey?: (item: T, index: number) => string;
  /** Extra classes for the outer wrapper. */
  className?: string;
};

/**
 * On mobile (<sm) renders a horizontal scroll-snap carousel.
 * On sm+ renders a CSS grid using the columns provided in `cols`.
 *
 * Padding tricks: outer `-mx-4 px-4` lets the carousel bleed to the screen
 * edge on mobile so the last card snaps fully into view, while resetting on
 * sm+ so the grid stays inside the Container.
 */
export function ResponsiveCarousel<T>({
  items,
  children,
  cols,
  mobileWidth = "w-[82%] sm:w-auto",
  itemKey,
  className = "",
}: Props<T>) {
  return (
    <div
      className={`-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-3 [scrollbar-width:thin] sm:mx-0 sm:grid sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0 ${cols} ${className}`}
    >
      {items.map((item, i) => (
        <div
          key={
            itemKey
              ? itemKey(item, i)
              : (item as { slug?: string }).slug ?? String(i)
          }
          className={`shrink-0 snap-start sm:shrink ${mobileWidth}`}
        >
          {children(item, i)}
        </div>
      ))}
    </div>
  );
}
