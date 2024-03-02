import { render } from "@testing-library/react";
import WelcomeStep from "../WelcomeStep";

const setup = () => render(<WelcomeStep />);

describe("WelcomeStep View", () => {
  test("should match snapshot", () => {
    const { asFragment } = setup();

    expect(asFragment()).toMatchSnapshot();
  });
});
