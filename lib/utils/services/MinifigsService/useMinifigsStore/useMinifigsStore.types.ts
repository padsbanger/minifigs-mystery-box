import { FormSteps, Minifig, MinifigPart } from "../MinifigsService.types";

export type MinifigsStore = {
  isLoading: boolean;
  currentStep: FormSteps;
  minifigs: Minifig[];
  selectedMinifig: Minifig | null;
  selectedMinifigParts: Array<MinifigPart>;
  getMinifigs: () => Promise<void>;
  getMinifigParts: (set_num: string) => Promise<void>;
  setCurrentStep: (step: FormSteps) => void;
  onMinifigSelect: (minifig: Minifig) => void;
};
