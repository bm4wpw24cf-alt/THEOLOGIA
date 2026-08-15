import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Brødsmulesti" className="border-b border-border bg-white py-6">
      <div className="mx-auto w-[min(1280px,92%)]">
        <ol className="flex flex-wrap items-center gap-3 font-sans text-[0.85rem] text-text-light">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={item.label}>
                {isLast || !item.href ? (
                  <span className="font-semibold text-ink" aria-current={isLast ? "page" : undefined}>
                    {item.label}
                  </span>
                ) : (
                  <Link href={item.href} className="transition-colors duration-200 hover:text-gold">
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
