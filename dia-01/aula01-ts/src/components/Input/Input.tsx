import React, {InputHTMLAttributes} from 'react';
import { Label, InputCustom } from './styles'

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

const Input = ({label, ...rest}: IProps) => {
    return (
        <label>
            <Label>{label}</Label>
            <InputCustom {...rest} />
        </label>
    )
}

export default Input;