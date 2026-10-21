'use client';

/**
 * Single-row docs header (section tabs on the left, theme switch + search on
 * the right), matching the layout of the product-family docs (OMS / AccountWise).
 * Built from Fumadocs' own notebook slots, so search, theme and mobile sidebar
 * behave exactly like the stock layout.
 */
import type { ComponentProps } from 'react';
import { useMemo } from 'react';
import Link from 'fumadocs-core/link';
import { usePathname } from 'fumadocs-core/framework';
import { useNotebookLayout } from 'fumadocs-ui/layouts/notebook';
import { useTabsGroups, useTreePath } from 'fumadocs-ui/contexts/tree';
import { isLayoutTabActive } from 'fumadocs-ui/layouts/shared';
import { buttonVariants } from 'fumadocs-ui/components/ui/button';
import { Sidebar } from 'lucide-react';
import { cn } from '@/lib/cn';

export function NotebookHeader(props: ComponentProps<'header'>) {
  const { slots, isNavTransparent, props: layoutProps } = useNotebookLayout();
  const { tabs } = layoutProps;
  const { open } = slots.sidebar?.useSidebar?.() ?? { open: false };
  const pathname = usePathname();
  const path = useTreePath();
  const groups = useTabsGroups(tabs);
  const options = groups.findLast((g) => typeof g.active?.root !== 'string')?.options;

  const selectedIdx = useMemo(
    () => options?.findLastIndex((o) => isLayoutTabActive(o, path, pathname)) ?? -1,
    [options, path, pathname],
  );

  return (
    <header
      id="nd-subnav"
      data-transparent={isNavTransparent && !open}
      {...props}
      className={cn(
        'sticky [grid-area:header] flex flex-col top-(--fd-docs-row-1) z-10 backdrop-blur-sm transition-colors data-[transparent=false]:bg-fd-background/80 layout:[--fd-header-height:--spacing(14)]',
        props.className,
      )}
    >
      <div data-header-body="" className="flex items-center border-b px-4 md:px-6 gap-4 h-14">
        {/* Mobile / collapsed: title + sidebar expand */}
        <div className="items-center hidden has-data-[collapsed=true]:md:flex max-md:flex gap-2">
          {slots.sidebar ? (
            <slots.sidebar.collapseTrigger
              className={cn(
                buttonVariants({ variant: 'ghost', size: 'icon-sm' }),
                '-ms-1.5 text-fd-muted-foreground data-[collapsed=false]:hidden max-md:hidden',
              )}
            >
              <Sidebar />
            </slots.sidebar.collapseTrigger>
          ) : null}
          {slots.navTitle ? (
            <slots.navTitle className="inline-flex items-center gap-2.5 font-semibold md:hidden" />
          ) : null}
        </div>

        {/* Section tabs */}
        <nav className="flex flex-1 min-w-0 flex-row items-center gap-3 2xl:gap-6 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden h-full max-lg:hidden">
          {options?.map((option, i) => {
            const isSelected = selectedIdx === i;
            if (option.unlisted && !isSelected) return null;
            return (
              <Link
                key={i}
                href={option.url}
                className={cn(
                  'inline-flex h-full items-center border-b-2 border-transparent font-medium text-[13px] text-nowrap text-fd-muted-foreground transition-colors hover:text-fd-accent-foreground',
                  isSelected && 'border-fd-primary text-fd-primary',
                )}
              >
                {option.title}
              </Link>
            );
          })}
        </nav>

        <div className="flex flex-1 lg:flex-none items-center justify-end gap-2">
          <div className="flex items-center md:hidden">
            {slots.searchTrigger ? <slots.searchTrigger.sm hideIfDisabled className="p-2" /> : null}
            {slots.sidebar ? (
              <slots.sidebar.trigger
                className={cn(buttonVariants({ variant: 'ghost', size: 'icon-sm', className: 'p-2 -me-1.5' }))}
              >
                <Sidebar />
              </slots.sidebar.trigger>
            ) : null}
          </div>
          <div className="flex items-center gap-3 max-md:hidden">
            {slots.themeSwitch ? <slots.themeSwitch /> : null}
            {slots.searchTrigger ? (
              <slots.searchTrigger.full hideIfDisabled className="w-[180px] 2xl:w-[240px] my-auto" />
            ) : null}
          </div>
        </div>
      </div>
    </header>
  );
}
