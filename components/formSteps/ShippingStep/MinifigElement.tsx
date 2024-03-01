import Heading from "@/components/ui/Heading/Heading";
import { MinifigPart } from "@/lib/utils/services/MinifigsService/MinifigsService.types";
import Image from "next/image";

const MinifigElement = ({ part }: MinifigPart) => {
  return (
    <div className="flex flex-col/ mb-4 justify-start gap-2">
      <Image
        src={part.part_img_url}
        alt={part.name}
        width="64"
        height="64"
        placeholder="blur"
        blurDataURL="/placeholder.jpg"
      />
      <div className="flex flex-col">
        <Heading
          variant="heading8"
          level={5}
          text={part.name}
          classes="font-bold line-clamp-1"
        />
        <Heading
          variant="heading9"
          level={6}
          text={part.part_num}
          classes="font-bold line-clamp-1 text-blue-500"
        />
      </div>
    </div>
  );
};

export default MinifigElement;
