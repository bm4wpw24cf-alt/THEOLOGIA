import { Icon } from "@/components/icons/Icon";
import { studyTools } from "@/lib/studyTools";

export function StudyToolsGrid() {
  return (
    <ul
      aria-label="Studieverktøy"
      className="grid grid-cols-3 gap-4 max-[1000px]:grid-cols-2 max-[640px]:grid-cols-1"
      style={{ listStyle: "none", margin: 0, padding: 0 }}
    >
      {studyTools.map((tool) => (
        <li key={tool.url} style={{ margin: 0 }}>
          <a
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-full flex-col rounded-radius-sm border border-border bg-white p-5 text-text transition-[transform,box-shadow,border-color] duration-300 ease-[var(--ease)] hover:-translate-y-1 hover:border-gold/35 hover:shadow-sm focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-[3px]"
          >
            <div className="mb-3 flex items-center justify-between gap-2">
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-parchment">
                <Icon name={tool.icon} className="h-5 w-5 text-gold" />
              </span>
              <span className="rounded-full bg-[#faf8f3] px-2.5 py-1 text-[.62rem] font-semibold tracking-[.5px] text-gold-dark uppercase">
                {tool.category}
              </span>
            </div>
            <h3 className="mb-1.5 text-[1.05rem] text-navy">{tool.name}</h3>
            <p className="mb-4 flex-1 text-[.82rem] leading-[1.55] text-text-light">{tool.description}</p>
            <span className="inline-flex items-center gap-1.5 text-[.78rem] font-semibold text-gold-dark">
              Åpne verktøy{" "}
              <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
