import { create } from "zustand";

import { MinifigsService } from "../MinifigsService";

import { FormSteps, Minifig, MinifigPart } from "../MinifigsService.types";
import { MinifigsStore } from "./useMinifigsStore.types";

export const useMinifigsStore = create<MinifigsStore>()((set, get) => ({
  getMinifigs: async () => {
    set({
      isLoading: true,
    });
    const { data } = await MinifigsService.getMiniFigs();

    set({
      isLoading: false,
      minifigs: data.results,
    });
  },
  getMinifigParts: async (set_num: string) => {
    const data = await MinifigsService.getParts(set_num);
    set({
      selectedMinifigParts: data.data.results,
    });
  },
  setCurrentStep: (step: FormSteps) => {
    set({ currentStep: step });
  },
  isLoading: false,
  minifigs: [],
  selectedMinifig: null,
  selectedMinifigParts: [],
  currentStep: "WELCOME",
}));

export const useIsLoadingMinifigs = (): boolean =>
  Boolean(useMinifigsStore((state) => state.isLoading));

export const useSelectedMinifig = (): Minifig | null =>
  useMinifigsStore((state) => state.selectedMinifig);

export const useSelectedMinifigParts = (): MinifigPart[] =>
  useMinifigsStore((state) => state.selectedMinifigParts);

export const useCurrentStep = (): FormSteps =>
  useMinifigsStore((state) => state.currentStep);

export const useRandomMinifigs = (): Minifig[] =>
  useMinifigsStore((state) =>
    state.minifigs.sort(() => Math.random() - Math.random()).slice(0, 3),
  );
