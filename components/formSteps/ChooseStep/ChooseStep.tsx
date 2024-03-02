import Heading from "@/components/ui/Heading/Heading";
import { Minifig } from "@/lib/utils/services/MinifigsService/MinifigsService.types";
import {
  useMinifigsStore,
  useRandomMinifigs,
  useSelectedMinifig,
} from "@/lib/utils/services/MinifigsService/useMinifigsStore/useMinifigsStore";
import MinifigBox from "./MinifigBox";
import Button from "@/components/ui/Button/Button";

const ChooseStep = () => {
  const minifigs = useRandomMinifigs();
  const selectedMinifig = useSelectedMinifig();
  const setCurrentStep = useMinifigsStore.getState().setCurrentStep;
  const selectMinifig = useMinifigsStore.getState().onMinifigSelect;

  return (
    <div className="flex flex-col h-screen justify-center">
      <Heading
        text="Choose your minifig"
        variant={"heading3"}
        level={3}
        classes="text-center text-white"
      />
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-6 my-32">
          {minifigs.map((el: Minifig) => (
            <MinifigBox
              {...el}
              key={el.name}
              isActive={selectedMinifig?.name === el.name}
              onMinifigSelect={() => selectMinifig(el)}
            />
          ))}
        </div>
        <div className="flex justify-center">
          <Button
            label={"Proceed to shipment!"}
            disabled={!selectedMinifig}
            onClick={() => setCurrentStep("SHIPPING")}
          />
        </div>
      </div>
    </div>
  );
};

export default ChooseStep;
