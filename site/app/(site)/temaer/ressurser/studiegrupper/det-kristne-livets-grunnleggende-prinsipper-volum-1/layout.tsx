import { StudyChapterFooter } from "@/components/resources/StudyChapterFooter";

export default function Volum1Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <StudyChapterFooter />
    </>
  );
}
