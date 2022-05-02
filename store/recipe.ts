import create from "zustand"
import { devtools } from "zustand/middleware"

function toggleStaff(stuffs: Set<string>, stuff: string): Set<string> {
  if (!stuff) {
    return stuffs
  }
  if (stuffs.has(stuff)) {
    stuffs.delete(stuff)
  } else {
    stuffs.add(stuff)
  }
  console.log('stuffs', stuffs)
  return new Set<string>(stuffs)
}

export type SearchMode = 'survival' | 'loose' | 'strict'

export interface UserRecipeState {
  stuffs: Set<string>;
  tool: string;
  searchMode: SearchMode,
  // toggle ingredient
  toggleStuff: (name: string) => void,
  // toogle tool
  toggleTool: (name: string) => void,
  // check whether selected the stuff
  // isSelectStuff: (name: string) => boolean,
  // reset all
  reset: () => void,
  // set searchMod
  setSearchMode: (name: SearchMode) => void,
  selectedStuff: () => Array<string>,
}

export const userRecipeState = create<UserRecipeState>()(devtools((set, get) => ({
  stuffs: new Set<string>(),
  tool: '',
  searchMode: 'loose',
  toggleStuff: (name: string) => set((state) => ({
    stuffs: toggleStaff(state.stuffs, name),
  })),
  toggleTool: (name: string) => set((state) => ({
    tool: state.tool === name ? '' : name,
  })),
  reset: () => set({
    stuffs: new Set<string>(),
    tool: '',
    searchMode: 'loose',
  }),
  setSearchMode: (name: SearchMode) => set(() => ({
    searchMode: name,
  })),
  selectedStuff: () => {
    return Array.from(get().stuffs)
  },
})))
