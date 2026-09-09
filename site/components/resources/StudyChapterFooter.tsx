"use client";

import { usePathname } from "next/navigation";
import { CommentsDisclosure } from "@/components/comments/CommentsDisclosure";
import { ChapterNav } from "@/components/resources/ChapterNav";
import {
  chapterCommentKey as denHerligeCommentKey,
  chapterHref as denHerligeHref,
  findChapterByPath as findDenHerligeChapter,
  isPublishedChapter as isDenHerligePublished,
  studyChapters as denHerligeStudyChapters,
} from "@/lib/denHerligeMenigheten";
import {
  chapterCommentKey as volum1CommentKey,
  chapterHref as volum1Href,
  findChapterByPath as findVolum1Chapter,
  isPublishedChapter as isVolum1Published,
  studyChapters as volum1StudyChapters,
} from "@/lib/volum1";

/**
 * Delt footer for publiserte studiesider i flere serier. Viser kommentarfelt og
 * enklere kapittelnavigasjon uten å hardkode én bestemt bok.
 */
export function StudyChapterFooter() {
  const pathname = usePathname();

  const isDenHerlige = pathname?.startsWith("/temaer/ressurser/studiegrupper/den-herlige-menigheten") ?? false;
  const isVolum1 = pathname?.startsWith("/temaer/ressurser/studiegrupper/det-kristne-livets-grunnleggende-prinsipper-volum-1") ?? false;

  const study = isDenHerlige
    ? {
        chapter: findDenHerligeChapter(pathname),
        published: isDenHerligePublished,
        href: denHerligeHref,
        commentKey: denHerligeCommentKey,
        chapters: denHerligeStudyChapters,
      }
    : isVolum1
      ? {
          chapter: findVolum1Chapter(pathname),
          published: isVolum1Published,
          href: volum1Href,
          commentKey: volum1CommentKey,
          chapters: volum1StudyChapters,
        }
      : null;

  if (!study || !study.chapter || !study.published(study.chapter)) return null;

  const index = study.chapters.indexOf(study.chapter);
  const prev = study.chapters[index - 1];
  const next = study.chapters[index + 1];

  return (
    <>
      <section className="pb-[70px]">
        <div className="mx-auto w-[min(1280px,92%)]">
          <CommentsDisclosure articleKey={study.commentKey(study.chapter.slug)} />
        </div>
      </section>

      <ChapterNav
        prev={prev ? { href: study.href(prev.slug), title: prev.title } : undefined}
        next={next ? { href: study.href(next.slug), title: next.title } : undefined}
      />
    </>
  );
}
