import { render, screen, fireEvent } from "@testing-library/react";
import StringCalculator from "./stringCalculator";

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

    test("returns sum for a single number", () => {
        render(<StringCalculator />);
        const input = screen.getByPlaceholderText("Enter numbers...");
        const button = screen.getByText("Calculate");

        fireEvent.change(input, { target: { value: "1" } });
        fireEvent.click(button);

        expect(screen.getByText("Result: 1")).toBeInTheDocument();
    });

    test("returns sum for multiple numbers", () => {
        render(<StringCalculator />);
        const input = screen.getByPlaceholderText("Enter numbers...");
        const button = screen.getByText("Calculate");

        fireEvent.change(input, { target: { value: "1,2,3" } });
        fireEvent.click(button);

        expect(screen.getByText("Result: 6")).toBeInTheDocument();
    });

})