import Button from "@/components/ui/Button/Button";
import Heading from "@/components/ui/Heading/Heading";
import Image from "next/image";
import {
  useIsLoadingMinifigs,
  useMinifigsStore,
} from "@/lib/utils/services/MinifigsService/useMinifigsStore/useMinifigsStore";

const WelcomeStep = () => {
  const getMinifigs = useMinifigsStore((state) => state.getMinifigs);
  const setCurrentStep = useMinifigsStore.getState().setCurrentStep;
  const isLoading = useIsLoadingMinifigs();

  const handleStart = async () => {
    await getMinifigs();
    setCurrentStep("CHOOSE");
  };

  return (
    <div className="flex flex-col items-center relative">
      <Heading
        text="lego minifigs mystery box"
        variant={"heading1"}
        level={1}
        classes="my-4 text-center"
      />
      <Button
        label={isLoading ? "Spinning the wheel" : "Let`s go!"}
        disabled={isLoading}
        onClick={handleStart}
      />
      <Image
        src={"/question-mark.svg"}
        alt="question-mark"
        className="absolute -top-20 -left-20 -rotate-[5deg]"
        width={64}
        height={64}
      />
      <Image
        src={"/question-mark.svg"}
        alt="question-mark"
        className="absolute -bottom-20 -right-20 rotate-[25deg]"
        width={48}
        height={48}
      />
    </div>
  );
};

export default WelcomeStep;
