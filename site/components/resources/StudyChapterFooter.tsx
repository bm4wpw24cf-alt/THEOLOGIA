"use client";

import { usePathname } from "next/navigation";
import { CommentsDisclosure } from "@/components/comments/CommentsDisclosure";
import {
  chapterCommentKey,
  chapterHref,
  findChapterByPath,
  isPublishedChapter,
  studyChapters,
} from "@/lib/denHerligeMenigheten";
import { ChapterNav } from "./ChapterNav";

/**
 * Delt footer for alle kapittelsider i «Den herlige menigheten». Rendres
 * sentralt fra studiegruppens layout, og legger automatisk til kommentarfelt
 * og kapittelnavigasjon på hver publisert kapittelside – nåværende og
 * framtidige – uten egen kode per kapittel.
 *
 * Selv-avgrensende: returnerer null på studieoversikten og på «kommer
 * senere»-sidene (ikke-publiserte kapitler).
 */
export function StudyChapterFooter() {
  const pathname = usePathname();
  const chapter = findChapterByPath(pathname);

  if (!chapter || !isPublishedChapter(chapter)) return null;

  const index = studyChapters.indexOf(chapter);
  const prev = studyChapters[index - 1];
  const next = studyChapters[index + 1];

  return (
    <>
      <section className="pb-[70px]">
        <div className="mx-auto w-[min(1280px,92%)]">
          <CommentsDisclosure articleKey={chapterCommentKey(chapter.slug)} />
        </div>
      </section>

      <ChapterNav
        prev={prev ? { href: chapterHref(prev.slug), title: prev.title } : undefined}
        next={next ? { href: chapterHref(next.slug), title: next.title } : undefined}
      />
    </>
  );
}
