import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe('<Button>', () => {
    it('should execute function in the onClick event', () => {
        const handleOnClick = jest.fn();

        render(<Button onClick={handleOnClick} />);

        const button = screen.getByText('button');

        fireEvent.click(button)

        screen.debug();
    });
});