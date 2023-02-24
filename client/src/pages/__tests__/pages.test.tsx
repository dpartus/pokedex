import App from "../../App";
import { render, screen } from "../../test-utils";

test("should App", () => {
  render(<App />);
  const searchBar = screen.getByRole("banner");
  expect(searchBar).toBeInTheDocument();
});
