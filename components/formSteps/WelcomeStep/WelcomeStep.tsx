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
    <div className="flex flex-col items-center h-screen justify-center">
      <div className="relative">
        <Image
          src={"/question-mark.svg"}
          alt="question-mark"
          className="absolute md:-top-20 md:-left-20 -rotate-[5deg] -top-20 left-20"
          width={64}
          height={64}
        />
        <Image
          src={"/question-mark.svg"}
          alt="question-mark"
          className="absolute md:-bottom-20 md:-right-20 rotate-[25deg] -bottom-10 right-10"
          width={48}
          height={48}
        />
        <Heading
          text="lego minifigs mystery box"
          variant={"heading1"}
          level={1}
          classes="my-4 text-center text-white"
        />
        <Button
          label={"Let`s go!"}
          disabled={isLoading}
          isLoading={isLoading}
          onClick={handleStart}
          classes="flex m-auto"
        />
      </div>
    </div>
  );
};

export default WelcomeStep;
