// components/FilterBar.tsx
// Update the import path below if your dropdown-menu component is located elsewhere
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../components/ui/dropdown-menu"
import { useChapterStore } from "@/store/useChapters"
import { Button } from "./Button"

export function FilterBar() {
  const filters = useChapterStore((state) => state.filters)
  const setFilters = useChapterStore((state) => state.setFilters)
  const sortOption = useChapterStore((state) => state.sortOption)
  const setSortOption = useChapterStore((state) => state.setSortOption) // <-- fix here
  const chapters = useChapterStore((state) => state.chapters)

  // Get unique classes for dropdown
  const classOptions = Array.from(new Set(chapters.map(ch => ch.class))).filter(Boolean)

  return (
    <div className="flex gap-4 mb-4">
      {/* Sort Dropdown */}
      <select
        className="bg-gray-800 text-white border border-gray-600 rounded px-3 py-2"
        value={sortOption || ""}
        onChange={e => setSortOption(e.target.value)}
      >
        <option value="">All</option>
        <option value="2015-low-to-high">2015: Low to High</option>
        <option value="2025-high-to-low">2025: High to Low</option>
      </select>

      {/* Class Dropdown */}
      <select
        className="bg-gray-800 text-white border border-gray-600 rounded px-3 py-2"
        value={filters.class || ""}
        onChange={e => setFilters({ class: e.target.value || null })}
      >
        <option value="">All Classes</option>
        {classOptions.map(cls => (
          <option key={cls} value={cls}>{cls}</option>
        ))}
      </select>
    </div>
  )
}
