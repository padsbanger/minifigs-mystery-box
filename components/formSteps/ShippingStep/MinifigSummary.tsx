import Heading from "@/components/ui/Heading/Heading";
import Image from "next/image";
import { useEffect } from "react";

import {
  useIsLoadingMinifigs,
  useMinifigsStore,
  useSelectedMinifig,
  useSelectedMinifigParts,
} from "@/lib/utils/services/MinifigsService/useMinifigsStore/useMinifigsStore";
import MinifigElement from "./MinifigElement";
import type { MinifigPart } from "@/lib/utils/services/MinifigsService/MinifigsService.types";
import Spinner from "@/components/ui/Spinner/Spinner";
import Button from "@/components/ui/Button/Button";
import clsx from "clsx";

type MinifigSummaryProps = {
  handleSubmit: () => void;
  isSubmitting: boolean;
};

const MinifigSummary = ({
  handleSubmit,
  isSubmitting,
}: MinifigSummaryProps) => {
  const getMinifigParts = useMinifigsStore.getState().getMinifigParts;
  const isLoading = useIsLoadingMinifigs();
  const selectedMinifig = useSelectedMinifig();
  const minifigParts = useSelectedMinifigParts();

  useEffect(() => {
    if (selectedMinifig?.set_num) {
      getMinifigParts(selectedMinifig?.set_num);
    }
  }, []);

  return (
    <div
      className={clsx(
        "flex flex-col bg-white shadow-md rounded-md basis-1/3 p-4 h-[calc(100vh-20rem)] min-w-[320px] overflow-auto",
        { "opacity-70": isSubmitting || isLoading },
      )}
    >
      <Heading
        text="Summary"
        variant={"heading3"}
        level={3}
        classes="my-4 text-black font-bold"
      />
      <Image
        src={selectedMinifig?.set_img_url as string}
        alt={selectedMinifig?.name as string}
        width="180"
        height="120"
        className="m-auto object-cover my-4 w-[180px]"
      />
      <Heading
        text={selectedMinifig?.name as string}
        variant={"heading8"}
        level={6}
        classes="my-4 text-black text-center font-bold"
      />
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <p className="font-plus-jakarta-sans my-4">
            There are {minifigParts.length} parts in this minifig:
          </p>
          <div className="h-auto md:h-[calc(100vh-1rem)] overflow-auto">
            {minifigParts.map((el: MinifigPart) => (
              <MinifigElement key={el.id} {...el} />
            ))}
          </div>
        </>
      )}
      <div>
        <Button
          type="submit"
          label="Submit"
          classes="flex items-center h-10 mx-auto my-10"
          onClick={handleSubmit}
          isLoading={isSubmitting}
          disabled={isSubmitting || isLoading}
        />
      </div>
    </div>
  );
};

export default MinifigSummary;
