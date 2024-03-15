import { create } from "zustand";

import { MinifigsService } from "../MinifigsService";

import { FormSteps, Minifig, MinifigPart } from "../MinifigsService.types";
import { MinifigsStore } from "./useMinifigsStore.types";
import { ShippingFormValues } from "@/components/formSteps/ShippingStep/ShippingStep.types";
import debounce from "@/lib/utils/debounce";

export const useMinifigsStore = create<MinifigsStore>()((set, get) => ({
  getMinifigs: async () => {
    set({
      isLoading: true,
    });
    try {
      const { data } = await MinifigsService.getMiniFigs();
      set({
        isError: false,
        isLoading: false,
        currentStep: "CHOOSE",
        minifigs: data.results
          .sort(() => Math.random() - Math.random())
          .slice(0, 3),
      });
    } catch (e) {
      set({
        isLoading: false,
        isError: true,
        currentStep: "WELCOME",
      });
    }
  },
  getMinifigParts: async (set_num: string) => {
    set({
      isLoading: true,
    });

    const data = await MinifigsService.getParts(set_num);
    const debounceSet = debounce(() => {
      set({
        isLoading: false,
        selectedMinifigParts: data.data.results,
      });
    }, 1500);
    debounceSet();
  },
  onMinifigSelect: (minifig: Minifig) => {
    set({
      selectedMinifig: minifig,
    });
  },
  setCurrentStep: (step: FormSteps) => {
    set({ currentStep: step });
  },
  saveOrder: async (payload: ShippingFormValues) => {
    set({
      isSubmittingOrder: true,
    });
    MinifigsService.sendOrder(payload).then(() => {
      set({
        isSubmittingOrder: false,
        minifigs: [],
        selectedMinifig: null,
        selectedMinifigParts: [],
        currentStep: "WELCOME",
      });
    });
  },
  isLoading: false,
  isError: false,
  isSubmittingOrder: false,
  minifigs: [],
  selectedMinifig: null,
  selectedMinifigParts: [],
  currentStep: "WELCOME",
}));

export const useIsLoadingMinifigs = (): boolean =>
  Boolean(useMinifigsStore((state) => state.isLoading));

export const useIsSubmittingOrder = (): boolean =>
  Boolean(useMinifigsStore((state) => state.isSubmittingOrder));

export const useSelectedMinifig = (): Minifig | null =>
  useMinifigsStore((state) => state.selectedMinifig);

export const useSelectedMinifigParts = (): MinifigPart[] =>
  useMinifigsStore((state) => state.selectedMinifigParts);

export const useCurrentStep = (): FormSteps =>
  useMinifigsStore((state) => state.currentStep);

export const useIsError = (): boolean =>
  useMinifigsStore((state) => state.isError);

export const useRandomMinifigs = (): Minifig[] =>
  useMinifigsStore((state) => state.minifigs);
