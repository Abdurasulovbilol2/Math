import { create } from 'zustand'

type Chapter = any // Replace 'any' with your actual Chapter type if available

interface Filters {
  class: string | null
  unit: string | null
  weak: boolean
  notStarted: boolean
  sort?: 'asc' | 'desc' // <-- Add this line
}

interface ChapterState {
  setSortOption: any
  sortOption: any
  chapters: Chapter[]
  filters: Filters
  setChapters: (chapters: Chapter[]) => void
  setFilters: (newFilters: Partial<Filters>) => void
}

export const useChapterStore = create<ChapterState>((set) => ({
  sortOption: null,
  chapters: [],
  filters: {
    class: null,
    unit: null,
    weak: false,
    notStarted: false
  },
  setChapters: (chapters) => set({ chapters }),
  setFilters: (newFilters) =>
    set((state) => ({
      filters: { ...state.filters, ...newFilters }
    })),
  setSortOption: (option: any) => set({ sortOption: option })
}))