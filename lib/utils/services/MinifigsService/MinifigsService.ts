import { AxiosResponse } from "axios";
import createHttpClient from "../../HttpClient";
import {
  MinifigPartsResponse,
  MinifigsResponse,
} from "./MinifigsService.types";
import { HARRY_POTTER_THEME_ID } from "./MinifigsService.const";
import { ShippingFormValues } from "@/components/formSteps/ShippingStep/ShippingStep.types";

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

  async sendOrder(payload: ShippingFormValues): Promise<ShippingFormValues> {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve(payload);
      }, 1500),
    );
  },
};
