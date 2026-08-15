import type { MDXComponents } from "mdx/types";
import { BibleBox } from "@/components/articles/BibleBox";
import { ImportantBox } from "@/components/articles/ImportantBox";
import { CrossReferenceBox } from "@/components/articles/CrossReferenceBox";
import { ContentList } from "@/components/articles/ContentList";

const components: MDXComponents = {
  BibleBox,
  ImportantBox,
  CrossReferenceBox,
  ContentList,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
