import create from "zustand"
import { devtools, persist } from "zustand/middleware"


export interface AppState {
  deferredPrompt: Event | any
  setDeferedPrompt: (e: Event | any) => void
}

export const appState = create<AppState>()(devtools(persist((set) => ({
  deferredPrompt: undefined,

  setDeferedPrompt: (p: Event | any) => set((state) => ({
    deferredPrompt: p
  }))
}))))