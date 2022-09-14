import { render, screen } from "@testing-library/react";
import HomePage from "./pages/HomePage";

test("renders learn react link", () => {
  render(<HomePage />);
  const headerElement = screen.getByText(/Cats Blog/i);
  expect(headerElement).toBeInTheDocument();
});
