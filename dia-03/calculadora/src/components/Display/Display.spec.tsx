import { render, screen } from "@testing-library/react"
import Display from "./Display"

describe('<Display>', () => {
    it('should display diplay', () => {
        render(<Display expression="test-expression" result="test-result" />)

        screen.getByText('test-expression');
        screen.getByText('test-result =');
    })
})