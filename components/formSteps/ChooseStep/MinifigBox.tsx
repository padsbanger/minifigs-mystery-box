import Image from "next/image";
import { Minifig } from "@/lib/utils/services/MinifigsService/MinifigsService.types";

type MiniFigProps = Minifig & { isActive: boolean };

const MinifigBox = ({ set_img_url, name }: MiniFigProps) => {
  return (
    <div className="bg-white rounded-md shadow-md">
      <div className="flex align-baseline justify-center object-contain">
        <Image src={set_img_url} alt={name} width="320" height="320" />
      </div>
      {name}
    </div>
  );
};

export default MinifigBox;
