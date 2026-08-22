import { Icon } from "@/components/icons/Icon";
import type { YoutubeChannel } from "@/lib/youtubeChannels";

export function YoutubeChannelGrid({ channels }: { channels: YoutubeChannel[] }) {
  return (
    <ul
      aria-label="YouTube-kanaler"
      className="grid grid-cols-3 gap-4 max-[1000px]:grid-cols-2 max-[640px]:grid-cols-1"
      style={{ listStyle: "none", margin: 0, padding: 0 }}
    >
      {channels.map((channel) => (
        <li key={channel.youtubeUrl} style={{ margin: 0 }}>
          <div className="flex h-full flex-col rounded-radius-sm border border-border bg-white p-5 text-text transition-[transform,box-shadow,border-color] duration-300 ease-[var(--ease)] hover:-translate-y-1 hover:border-gold/35 hover:shadow-sm">
            <span className="mb-3 flex h-11 w-11 flex-none items-center justify-center rounded-full bg-parchment">
              <Icon name="youtube" className="h-5 w-5 text-gold" />
            </span>
            <h3 className="mb-1.5 text-[1.05rem] text-navy">{channel.title}</h3>
            <p className="mb-4 flex-1 text-[.82rem] leading-[1.55] text-text-light">{channel.description}</p>
            <div className="flex flex-wrap gap-x-4 gap-y-1.5">
              <a
                href={channel.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center gap-1.5 text-[.78rem] font-semibold text-gold-dark transition-colors duration-200 hover:text-gold focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-[3px]"
              >
                Se på YouTube{" "}
                <span aria-hidden="true" className="transition-transform duration-200 group-hover/link:translate-x-1">
                  →
                </span>
              </a>
              {channel.websiteUrl && (
                <a
                  href={channel.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-1.5 text-[.78rem] font-semibold text-navy transition-colors duration-200 hover:text-gold focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-[3px]"
                >
                  Nettside{" "}
                  <span aria-hidden="true" className="transition-transform duration-200 group-hover/link:translate-x-1">
                    →
                  </span>
                </a>
              )}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
