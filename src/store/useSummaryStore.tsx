import { create } from 'zustand'

interface SummaryState {
  generatedSummary: string | null
  isGenerating: boolean
  setGeneratedSummary: (summary: string) => void
  setIsGenerating: (loading: boolean) => void
  clearSummary: () => void
}

const useSummaryStore = create<SummaryState>((set) => ({
  generatedSummary: null,
  isGenerating: false,
  setGeneratedSummary: (summary) => set({ generatedSummary: summary, isGenerating: false }),
  setIsGenerating: (loading) => set({ isGenerating: loading }),
  clearSummary: () => set({ generatedSummary: null })
}))

export { useSummaryStore }