"use client";

import ChooseStep from "@/components/formSteps/ChooseStep/ChooseStep";
import ShippingStep from "@/components/formSteps/ShippingStep/ShippingStep";
import WelcomeStep from "@/components/formSteps/WelcomeStep/WelcomeStep";
import { useCurrentStep } from "@/lib/utils/services/MinifigsService/useMinifigsStore/useMinifigsStore";

export default function Home() {
  const currentFormStep = useCurrentStep();

  const renderCurrentStep = () => {
    switch (currentFormStep) {
      case "WELCOME":
        return <WelcomeStep />;
      case "CHOOSE":
        return <ChooseStep />;
      case "SHIPPING":
        return <ShippingStep />;
      default:
        break;
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {renderCurrentStep()}
    </main>
  );
}
