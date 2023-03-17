import create, { SetState } from "zustand";

interface ResultProps {
  result: number[];
  saveResult: () => void;
}

export const useStore = create<ResultProps>(set => ({
  result: [],
  saveResult() {
    set(state => ({ result: state.result }));
  },
}));
