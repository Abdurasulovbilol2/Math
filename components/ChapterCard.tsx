// components/ChapterCard.tsx
'use client';
import { Progress } from "@/components/ui/progress";
import { Cube, BookOpen, Atom, Planet } from "@phosphor-icons/react";

const icons = [Cube, BookOpen, Atom, Planet];

interface Chapter {
  chapter: string;
  class: string | number;
  unit: string | number;
  yearWiseQuestionCount: { [year: string]: number };
  questionSolved: number;
  status: string;
  isWeakChapter?: boolean;
}

export default function ChapterCard({ chapter }: { chapter: Chapter }) {
  const Icon = icons[Math.floor(Math.random() * icons.length)];
  const totalQuestions = Object.values(chapter.yearWiseQuestionCount).reduce(
    (acc: number, val) => acc + (val as number),
    0
  );
  const solved = chapter.questionSolved;
  const progress = totalQuestions ? Math.min(100, Math.round((solved / totalQuestions) * 100)) : 0;

  return (
    <div className="flex items-center justify-between px-4 py-2 rounded-lg border bg-white dark:bg-gray-900 shadow-sm mb-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition">
      <div className="flex flex-col">
        <span className="font-medium text-base">{chapter.chapter}</span>
        <span className="text-xs text-gray-500 dark:text-gray-400">
          Class: {chapter.class} | Unit: {chapter.unit}
        </span>
        <span className="text-xs text-gray-500 dark:text-gray-400">
          {Object.entries(chapter.yearWiseQuestionCount)
            .map(([year, count]) => `${year}: ${count}`)
            .join(" | ")}
        </span>
      </div>
      <div className="flex flex-col items-end min-w-[120px]">
        <span className={`text-xs mb-1 px-2 py-0.5 rounded-full ${
          chapter.status === "Completed"
            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
            : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
        }`}>
          {chapter.status}
        </span>
        <span className="text-xs text-gray-500 dark:text-gray-400 mb-1">
          {solved} / {totalQuestions}
        </span>
        <div className="h-1 w-24">
          <Progress value={progress} />
        </div>
        {chapter.isWeakChapter && (
          <span className="mt-1 text-xs text-red-600 dark:text-red-400 font-medium">
            Weak
          </span>
        )}
      </div>
    </div>
  );
}

// Example usage
<ChapterCard chapter={{
  chapter: "Algebra",
  class: 11,
  unit: 2,
  yearWiseQuestionCount: { "2021": 10, "2022": 15 },
  questionSolved: 12,
  status: "Completed",
  isWeakChapter: false
}} />
