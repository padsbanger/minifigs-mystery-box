export type Variant =
  | "display"
  | "heading1"
  | "heading2"
  | "heading3"
  | "heading4"
  | "heading5"
  | "heading6"
  | "heading7"
  | "heading8"
  | "heading9"
  | "heading10";

export type Level = 1 | 2 | 3 | 4 | 5 | 6;

export type HeadingProps = {
  variant: Variant;
  level: Level;
  text: string | JSX.Element;
  classes?: string;
};

export type ClassMap = {
  [key in Variant]: string;
};
