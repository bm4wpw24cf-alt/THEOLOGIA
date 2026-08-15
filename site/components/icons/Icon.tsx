import type { SVGProps } from "react";

export type IconName =
  | "search"
  | "book"
  | "books"
  | "heart"
  | "path"
  | "column"
  | "shield"
  | "book-open"
  | "cross-large"
  | "cross"
  | "sprout"
  | "hands"
  | "mountain-flag"
  | "house"
  | "document"
  | "youtube"
  | "facebook"
  | "instagram"
  | "x"
  | "video"
  | "podcast"
  | "globe"
  | "users"
  | "tools"
  | "megaphone"
  | "family"
  | "briefcase"
  | "comment";

/* Path-data portert 1:1 fra css/icons.css sine mask-image data-URI-er.
   Der originalen brukte currentColor via CSS mask, styres fargen her
   via stroke=currentColor/fill=currentColor på samme måte.

   "users" og "tools" har ingen .icon-users/.icon-tools-regel i
   css/icons.css i det hele tatt – .icon sin base-regel
   (background-color:currentColor, uten mask-image) gjør at disse to
   rendres som et heltrukket fylt kvadrat i originalen, ikke et
   manglende/usynlig ikon. "solid" gjenskaper nøyaktig dette (en
   pre-eksisterende mangel i designsystemet, ikke noe å rette opp i
   en migrering). */
const icons: Record<
  IconName,
  { viewBox: string; strokeWidth?: string; filled?: boolean; solid?: boolean; content?: React.ReactNode }
> = {
  search: {
    viewBox: "0 0 24 24",
    strokeWidth: "1.8",
    content: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21l-4.3-4.3" />
      </>
    ),
  },
  book: {
    viewBox: "0 0 24 24",
    strokeWidth: "1.6",
    content: (
      <>
        <path d="M2 5.5c3-2 6-2 9 0v14c-3-2-6-2-9 0v-14z" />
        <path d="M22 5.5c-3-2-6-2-9 0v14c3-2 6-2 9 0v-14z" />
      </>
    ),
  },
  books: {
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    content: (
      <>
        <path d="M12 3L2.5 7.5 12 12l9.5-4.5L12 3z" />
        <path d="M2.5 12l9.5 4.5 9.5-4.5" />
        <path d="M2.5 16.5L12 21l9.5-4.5" />
      </>
    ),
  },
  heart: {
    viewBox: "0 0 24 24",
    strokeWidth: "1.6",
    content: <path d="M12 20.5S3.5 15.4 3.5 9.2C3.5 6 6 4 8.6 4 10 4 11.2 4.7 12 6c.8-1.3 2-2 3.4-2 2.6 0 5.1 2 5.1 5.2 0 6.2-8.5 11.3-8.5 11.3z" />,
  },
  path: {
    viewBox: "0 0 24 24",
    filled: true,
    content: <path d="M12 2c.6 2.8 1.7 4.9 3.5 6.5C17.3 10 19.4 11.1 22 11.7c-2.6.6-4.7 1.7-6.5 3.4C13.7 16.7 12.6 18.8 12 21.6c-.6-2.8-1.7-4.9-3.5-6.5C6.7 13.4 4.6 12.3 2 11.7c2.6-.6 4.7-1.7 6.5-3.2C10.3 6.9 11.4 4.8 12 2z" />,
  },
  column: {
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    content: (
      <>
        <path d="M2 10l10-6 10 6" />
        <path d="M4 10v9M9 10v9M15 10v9M20 10v9" />
        <path d="M2.5 21h19" />
      </>
    ),
  },
  shield: {
    viewBox: "0 0 24 24",
    strokeWidth: "1.6",
    content: (
      <>
        <path d="M12 3l7 3v5.5c0 4.8-3 8.2-7 9.5-4-1.3-7-4.7-7-9.5V6l7-3z" />
        <path d="M9 12l2 2 4-4.5" />
      </>
    ),
  },
  "book-open": {
    viewBox: "0 0 24 24",
    strokeWidth: "1.6",
    content: (
      <>
        <path d="M12 6.5c-2-1.6-5.2-2-9-1v13c3.8-1 7-.6 9 1 2-1.6 5.2-2 9-1v-13c-3.8-1-7-.6-9 1z" />
        <path d="M12 6.5v13" />
      </>
    ),
  },
  "cross-large": {
    viewBox: "0 0 24 24",
    strokeWidth: "1.1",
    content: <path d="M12 3v18M7.5 8.5h9" />,
  },
  cross: {
    viewBox: "0 0 24 24",
    strokeWidth: "1.6",
    content: <path d="M12 3v18M7.5 8.5h9" />,
  },
  sprout: {
    viewBox: "0 0 24 24",
    strokeWidth: "1.6",
    content: (
      <>
        <path d="M12 21v-9.5" />
        <path d="M12 12c0-4.2-3-6.5-7.5-6.5 0 4.2 3 6.5 7.5 6.5z" />
        <path d="M12 9c0-3.2 2.6-5.3 6.5-5.3 0 3.2-2.6 5.3-6.5 5.3z" />
      </>
    ),
  },
  hands: {
    viewBox: "0 0 24 24",
    strokeWidth: "1.6",
    content: (
      <>
        <path d="M12 3v6" />
        <path d="M9.5 4.5c-.6 2-.6 4 0 6" />
        <path d="M14.5 4.5c.6 2 .6 4 0 6" />
        <path d="M8 9.5c-1.6 2-2.1 5.2-1 8.6 1 1 2.6 1.4 4 .4" />
        <path d="M16 9.5c1.6 2 2.1 5.2 1 8.6-1 1-2.6 1.4-4 .4" />
        <path d="M12 19v2" />
      </>
    ),
  },
  "mountain-flag": {
    viewBox: "0 0 24 24",
    strokeWidth: "1.6",
    content: (
      <>
        <path d="M3 20l6-11 4 6 2-3 6 8H3z" />
        <path d="M15 12V4" />
        <path d="M15 4l4.5 2-4.5 2" />
      </>
    ),
  },
  house: {
    viewBox: "0 0 24 24",
    strokeWidth: "1.6",
    content: (
      <>
        <path d="M4 11.5L12 4l8 7.5" />
        <path d="M6 10v10h12V10" />
        <path d="M10 20v-6h4v6" />
      </>
    ),
  },
  document: {
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    content: (
      <>
        <path d="M6 2h8l5 5v15H6V2z" />
        <path d="M14 2v5h5" />
        <path d="M9 13h6M9 17h6" />
      </>
    ),
  },
  youtube: {
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    content: (
      <>
        <rect x="2" y="5.5" width="20" height="13" rx="3.5" />
        <path d="M10 9.2v5.6l5-2.8z" fill="currentColor" stroke="none" />
      </>
    ),
  },
  facebook: {
    viewBox: "0 0 24 24",
    filled: true,
    content: <path d="M15 8.5h2.5V5H15c-2.2 0-4 1.8-4 4v2H8.5v3.5H11V21h3.5v-6.5h2.5l.5-3.5h-3V9c0-.4.3-.5.5-.5z" />,
  },
  instagram: {
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    content: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4.2" />
        <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
      </>
    ),
  },
  x: {
    viewBox: "0 0 24 24",
    strokeWidth: "1.8",
    content: <path d="M4.5 4.5l15 15M19.5 4.5l-15 15" />,
  },
  video: {
    viewBox: "0 0 24 24",
    filled: true,
    content: <path d="M8 5.5v13l11-6.5z" />,
  },
  podcast: {
    viewBox: "0 0 24 24",
    strokeWidth: "1.6",
    content: (
      <>
        <rect x="9" y="2" width="6" height="11" rx="3" />
        <path d="M5 11v1a7 7 0 0 0 14 0v-1" />
        <path d="M12 19v3M9 22h6" />
      </>
    ),
  },
  globe: {
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    content: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </>
    ),
  },
  users: { viewBox: "0 0 24 24", solid: true },
  tools: { viewBox: "0 0 24 24", solid: true },
  megaphone: {
    viewBox: "0 0 24 24",
    strokeWidth: "1.6",
    content: (
      <>
        <path d="M3 10.5v4h3l10 5.2V5.3L6 10.5H3z" />
        <path d="M18 9a4.3 4.3 0 0 1 0 6.7" />
      </>
    ),
  },
  family: {
    viewBox: "0 0 24 24",
    strokeWidth: "1.6",
    content: (
      <>
        <circle cx="8.5" cy="6.5" r="2.5" />
        <circle cx="16" cy="7.5" r="2" />
        <path d="M3.5 20v-2.5a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4V20" />
        <path d="M13.8 20v-2a3.3 3.3 0 0 1 3.3-3.3h.5a3.3 3.3 0 0 1 3.3 3.3V20" />
      </>
    ),
  },
  briefcase: {
    viewBox: "0 0 24 24",
    strokeWidth: "1.6",
    content: (
      <>
        <rect x="3" y="8" width="18" height="11.5" rx="2" />
        <path d="M8.5 8V6a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v2" />
        <path d="M3 13.5h18" />
      </>
    ),
  },
  comment: {
    viewBox: "0 0 24 24",
    strokeWidth: "1.6",
    content: (
      <path d="M21 11.5a8.4 8.4 0 0 1-8.4 8.4H7.6L3 21l1.3-4a8.3 8.3 0 0 1-.7-3.5A8.4 8.4 0 0 1 12.2 5a8.4 8.4 0 0 1 8.8 6.5z" />
    ),
  },
};

export function Icon({ name, ...props }: { name: IconName } & SVGProps<SVGSVGElement>) {
  const icon = icons[name];

  if (icon.solid) {
    const { className, style } = props;
    return (
      <span
        aria-hidden="true"
        className={className}
        style={{ display: "inline-block", width: "1em", height: "1em", backgroundColor: "currentColor", ...style }}
      />
    );
  }

  if (icon.filled) {
    return (
      <svg viewBox={icon.viewBox} fill="currentColor" aria-hidden="true" {...props}>
        {icon.content}
      </svg>
    );
  }

  return (
    <svg
      viewBox={icon.viewBox}
      fill="none"
      stroke="currentColor"
      strokeWidth={icon.strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {icon.content}
    </svg>
  );
}
