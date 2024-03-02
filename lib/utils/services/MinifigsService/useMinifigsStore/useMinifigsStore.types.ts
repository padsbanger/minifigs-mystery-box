import { ShippingFormValues } from "@/components/formSteps/ShippingStep/ShippingStep.types";
import { FormSteps, Minifig, MinifigPart } from "../MinifigsService.types";

export type MinifigsStore = {
  isLoading: boolean;
  isSubmittingOrder: boolean;
  currentStep: FormSteps;
  minifigs: Minifig[];
  selectedMinifig: Minifig | null;
  selectedMinifigParts: Array<MinifigPart>;
  getMinifigs: () => Promise<void>;
  getMinifigParts: (set_num: string) => Promise<void>;
  setCurrentStep: (step: FormSteps) => void;
  onMinifigSelect: (minifig: Minifig) => void;
  saveOrder: (payload: ShippingFormValues) => Promise<void>;
};
