import { render } from "@testing-library/react";
import ChooseStep from "../ChooseStep";

const setup = () => render(<ChooseStep />);

describe("ChooseStep View", () => {
  test("should match snapshot", () => {
    const { asFragment } = setup();

    expect(asFragment()).toMatchSnapshot();
  });
});
