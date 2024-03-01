import { AxiosResponse } from "axios";
import createHttpClient from "../../HttpClient";
import {
  MinifigPartsResponse,
  MinifigsResponse,
} from "./MinifigsService.types";
import { HARRY_POTTER_THEME_ID } from "./MinifigsService.consts";

export const MinifigsService = {
  async getMiniFigs(): Promise<AxiosResponse<MinifigsResponse>> {
    const client = createHttpClient();
    return await client.get(`/minifigs/?in_theme_id=${HARRY_POTTER_THEME_ID}`);
  },

  async getParts(
    set_num: string,
  ): Promise<AxiosResponse<MinifigPartsResponse>> {
    const client = createHttpClient();
    return await client.get(`/minifigs/${set_num}/parts/`);
  },

  async saveOrder(): Promise<any> {
    return new Promise((resolve) => setTimeout(() => console.log("ok"), 1000));
  },
};
