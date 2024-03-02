import { render } from "@testing-library/react";
import ShippingStep from "../ShippingStep";

const setup = () => render(<ShippingStep />);

describe("ShippingStep View", () => {
  test("should match snapshot", () => {
    const { asFragment } = setup();

    expect(asFragment()).toMatchSnapshot();
  });
});
