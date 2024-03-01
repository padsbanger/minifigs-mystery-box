export type FormSteps = "WELCOME" | "CHOOSE" | "SHIPPING";

export type Minifig = {
  set_num: string;
  name: string;
  num_parts: number;
  set_img_url: string;
  set_url: string;
  last_modified_dt: string;
};

export type MinifigsResponse = {
  count: number;
  next: null;
  previous: null;
  results: Array<Minifig>;
};

export type MinifigPart = {
  id: number;
  inv_part_id: number;
  part: {
    part_num: string;
    name: string;
    part_cat_id: number;
    part_img_url: string;
  };
};

export type MinifigPartsResponse = {
  count: number;
  next: number;
  previous: number;
  results: Array<MinifigPart>;
};
