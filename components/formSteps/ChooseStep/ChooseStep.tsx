import Heading from "@/components/ui/Heading/Heading";
import { Minifig } from "@/lib/utils/services/MinifigsService/MinifigsService.types";
import {
  useRandomMinifigs,
  useSelectedMinifig,
} from "@/lib/utils/services/MinifigsService/useMinifigsStore/useMinifigsStore";
import MinifigBox from "./MinifigBox";

const ChooseStep = () => {
  const minifigs = useRandomMinifigs();
  const selectedMinifig = useSelectedMinifig();

  console.log(selectedMinifig);

  return (
    <div>
      <Heading
        text="Choose your minifig"
        variant={"heading1"}
        level={1}
        classes="my-4 text-center"
      />
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-4">
          {minifigs.map((el: Minifig) => (
            <MinifigBox key={el.name} isActive={false} {...el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChooseStep;
