import React, { InputHTMLAttributes } from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    startDate: Date | null | undefined;
}

const DataInput = ({ startDate }: IProps ) => {
    return (
        <div data-testid="date-picker" >
            <DatePicker 
                selected={startDate} 
                onChange={date => console.log('oi')} 
            />
        </div>
    );
}

export default DataInput;