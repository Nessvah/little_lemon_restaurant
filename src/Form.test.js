import { render, screen } from "@testing-library/react";
import BookingForm from "./components/BookingForm";
import * as user from "@testing-library/user-event/dist/type";
import userEvent from "@testing-library/user-event";

// Test if the Booking component renders correctly on page

describe("Booking component", () => {
  it("should render Booking component correctly", () => {
    render(<BookingForm />);
    const element = screen.getByRole("heading", {
      name: /let's reserve your table/i,
    });
    expect(element).toBeInTheDocument();
  });

  it("should show an error message if all the fields are not entered", () => {
    render(<BookingForm />);
    const button = screen.getByRole("button", { name: /confirm reservation/i });
    userEvent.click(button);
  });
});
