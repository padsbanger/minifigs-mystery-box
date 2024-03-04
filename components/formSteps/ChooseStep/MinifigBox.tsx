import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

import { Minifig } from "@/lib/utils/services/MinifigsService/MinifigsService.types";
import Heading from "@/components/ui/Heading/Heading";

type MiniFigProps = Minifig & {
  isActive: boolean;
  onMinifigSelect: () => void;
};

const MinifigBox = ({
  set_img_url,
  name,
  set_url,
  isActive,
  onMinifigSelect,
}: MiniFigProps) => {
  return (
    <div
      onClick={onMinifigSelect}
      className={clsx(
        "hover:bg-red bg-white rounded-lg shadow-md cursor-pointer hover:p-2 transition-all my-2 md:m-0",
        {
          "shadow-selectedMinifig": isActive,
        },
      )}
    >
      <div className="flex align-baseline justify-center object-contain">
        <Image
          src={set_img_url}
          alt={name}
          width="320"
          height="320"
          placeholder="blur"
          className="w-full aspect-h-4 aspect-w-3 rounded-lg pt-4"
          blurDataURL="/placeholder.jpg"
        />
      </div>
      <Heading
        text={name}
        variant={"heading8"}
        level={6}
        classes="text-center !text-black normal-case m-4 font-bold line-clamp-1"
      />
      <Link
        href={set_url}
        target="_blank"
        className="text-center block m-4 font-plus-jakarta-sans font-bold text-blue-500 hover:text-blue-700"
      >
        Show Details
      </Link>
    </div>
  );
};

export default MinifigBox;
