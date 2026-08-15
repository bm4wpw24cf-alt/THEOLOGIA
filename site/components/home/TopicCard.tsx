import Link from "next/link";
import { Icon, type IconName } from "@/components/icons/Icon";

export interface Topic {
  icon: IconName;
  title: string;
  description: string;
  href: string;
  /** CTA-tekst nederst i kortet. Standard "Utforsk temaet" (forsiden); enkelte sider (f.eks. Fundament) bruker "Les mer" som i originalen. */
  cta?: string;
}

export function TopicCard({ topic }: { topic: Topic }) {
  return (
    <Link
      href={topic.href}
      className="group block rounded-radius border border-border bg-white p-[42px_30px] text-center shadow-sm transition-[transform,box-shadow,border-color] duration-[350ms] ease-[var(--ease)] hover:-translate-y-2 hover:border-gold/35 hover:shadow-lg"
    >
      <Icon name={topic.icon} className="mx-auto mb-[22px] block h-[34px] w-[34px] text-gold" />
      <h3 className="mb-3 text-[1.3rem]">{topic.title}</h3>
      <p className="mb-5 font-sans text-[0.92rem] leading-[1.6] text-text-light">{topic.description}</p>
      <span className="font-sans text-[0.86rem] font-semibold tracking-[0.2px] text-gold group-hover:text-gold-dark">
        {topic.cta ?? "Utforsk temaet"}
        <span aria-hidden="true" className="ml-1.5">
          →
        </span>
      </span>
    </Link>
  );
}
