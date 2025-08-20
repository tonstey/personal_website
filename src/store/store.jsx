import { create } from "zustand";

const useWebStore = create((set) => ({
  displayProject: {},
  setDisplayProject: (project) => set(() => ({ displayProject: project })),

  displayResume: null,
  setDisplayResume: (resume) => set(() => ({ displayResume: resume })),
}));

export default useWebStore;
