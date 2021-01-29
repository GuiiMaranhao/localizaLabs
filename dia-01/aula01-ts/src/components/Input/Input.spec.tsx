import { screen, render } from "@testing-library/react";
import Input from "./Input";

describe('<Input>', () => {
    it('should show label',  () => {
        render(<Input label="test-label" />)
        screen.getByText('test-label')
    })

    it('should render the input', () => {
        render(<Input label="test-label"  data-testid="input-test"/>)
        screen.getByTestId('input-test')
    })
});