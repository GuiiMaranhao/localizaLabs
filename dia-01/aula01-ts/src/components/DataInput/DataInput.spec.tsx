import { render, screen } from "@testing-library/react";
import { DH_UNABLE_TO_CHECK_GENERATOR } from "constants";
import { sr } from "date-fns/esm/locale";
import DataInput from "./DataInput";

describe('<DataInput>', () => {
    it('should show the calendar', () => {
        render(<DataInput startDate={new Date()}  />);

        screen.getByTestId('date-picker')
    })
});