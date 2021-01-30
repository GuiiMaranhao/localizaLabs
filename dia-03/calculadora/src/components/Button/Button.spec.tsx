import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe('<Button>', () => {
    it('should execute function in the onClick event', () => {
        const handleOnClick = jest.fn();

        render(<Button label="test-label" onClick={handleOnClick} />);

        const button = screen.getByText('test-label');

        fireEvent.click(button)

        expect(handleOnClick).toBeCalled();
    });

    it('should display the icon without a button', () => {
        const handleOnClick = jest.fn();

        render(<Button label="test-label" onClick={handleOnClick} icon="icon-test" />);

        screen.getByText('icon-test');
    });
});