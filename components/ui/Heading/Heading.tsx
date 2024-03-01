import clsx from "clsx";
import { ClassMap, HeadingProps } from "./Heading.types";

const classMap: ClassMap = {
  display: "text-display font-700 leading-[110%]",
  heading1: "text-headline-1 font-700 leading-[120%]",
  heading2: "text-headline-2 font-700 leading-[120%]",
  heading3: "text-headline-3 font-700 leading-[130%]",
  heading4: "text-headline-4 font-700 leading-[125%]",
  heading5: "text-headline-5 font-700 leading-[135%]",
  heading6: "text-headline-6 font-700 leading-[140%]",
  heading7: "text-headline-7 font-700 leading-[145%]",
  heading8: "text-headline-8 font-700 leading-[145%]",
  heading9: "text-headline-9 font-700 leading-[145%]",
  heading10: "text-headline-10 font-700 leading-[145%]",
};

const commonClasses = "font-plus-jakarta-sans leading-normal uppercase";

const Heading = ({ classes, variant, level, text }: HeadingProps) => {
  const Tag: keyof JSX.IntrinsicElements = `h${level}`;
  return (
    <Tag className={clsx(commonClasses, classMap[variant], classes)}>
      {text}
    </Tag>
  );
};

export default Heading;
