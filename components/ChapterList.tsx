// components/ChapterList.tsx
'use client'

import { useChapterStore } from '@/store/useChapters'
import ChapterCard from './ChapterCard'

export function ChapterList() {
  const chapters = useChapterStore((state) => state.chapters)
  const sortOption = useChapterStore((state) => state.sortOption)
  const filters = useChapterStore((state) => state.filters)

  // Filter chapters
  const filteredChapters = chapters.filter((chapter) => {
    if (filters.class && String(chapter.class) !== String(filters.class)) return false;
    if (filters.unit && chapter.unit !== filters.unit) return false;
    if (filters.weak && !chapter.isWeakChapter) return false;
    if (filters.notStarted && chapter.status !== "Not Started") return false;
    return true;
  });

  // Parse year and direction from sortOption
  let sortYear = "2025";
  let sortDirection = null;
  if (sortOption) {
    const match = sortOption.match(/^(\d{4})-(low|high)-to-(low|high)$/);
    if (match) {
      sortYear = match[1];
      sortDirection = match[2] === "low" ? "asc" : "desc";
    } else if (sortOption === "2015-low-to-high") {
      sortYear = "2015";
      sortDirection = "asc";
    } else if (sortOption === "2025-high-to-low") {
      sortYear = "2025";
      sortDirection = "desc";
    }
  }

  // Sort chapters
  const sortedChapters = [...filteredChapters].sort((a, b) => {
    const aCount = a.yearWiseQuestionCount?.[sortYear] ?? 0;
    const bCount = b.yearWiseQuestionCount?.[sortYear] ?? 0;
    if (sortDirection === "asc") {
      return aCount - bCount;
    } else if (sortDirection === "desc") {
      return bCount - aCount;
    }
    return 0;
  });

  return (
    <div>
      {sortedChapters.map((chapter, idx) => (
        <ChapterCard key={idx} chapter={chapter} />
      ))}
    </div>
  )
}
