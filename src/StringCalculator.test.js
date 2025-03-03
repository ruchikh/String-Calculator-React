import { render, screen, fireEvent } from "@testing-library/react";
import StringCalculator from "./StringCalculator";
describe("String Calculator", () => {
    test("renders input and button", () => {
        render(<StringCalculator />);
        expect(screen.getByPlaceholderText("Enter numbers...")).toBeInTheDocument();
        expect(screen.getByText("Calculate")).toBeInTheDocument();
    });

    test("returns 0 for an empty string", () => {
        render(<StringCalculator />);
        const input = screen.getByPlaceholderText("Enter numbers...");
        const button = screen.getByText("Calculate");

        fireEvent.change(input, { target: { value: "" } });
        fireEvent.click(button);
        expect(screen.getByText("Result: 0")).toBeInTheDocument();
    });
})