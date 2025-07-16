// app/page.tsx

"use client"
import { useEffect } from 'react'
import { Sidebar } from '@/components/Sidebar'
import { ChapterList } from '@/components/ChapterList'
import { FilterBar } from '@/components/FilterBar'
import { useChapterStore } from '@/store/useChapters'
import chapterData from '@/data/chapters.json'
import ChapterCard from "@/components/ChapterCard";

// Remove unused ChaptersJson type if not needed

export default function HomePage() {
  const setChapters = useChapterStore((state) => state.setChapters)

  useEffect(() => {
    setChapters(
      Array.isArray(chapterData)
        ? chapterData
        : []
    )
  }, [setChapters])

  return (
    <main className="flex min-h-screen">
      {/* <Sidebar /> */}
      <div className="flex-1 p-4 bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
        <FilterBar />
        <ChapterList />
        <div>
          <ChapterCard chapter={{
            chapter: "Algebra",
            class: 11,
            unit: 2,
            yearWiseQuestionCount: { "2021": 10, "2022": 15 },
            questionSolved: 12,
            status: "Completed",
            isWeakChapter: false
          }} />
        </div>
      </div>
    </main>
  )
}
