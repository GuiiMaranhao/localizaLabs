import React, { FC } from 'react';
import { IProps } from './types';

import { ButtonContainer } from './styles'

const Button: FC<IProps> = ({ 
    label,
    backgroundColor,
    color,
    icon,
    onClick
}) => {
    return (
        <ButtonContainer 
            onClick={onClick}
            backgroundColor={backgroundColor}
            color={color}
        >
            {icon && <i>{icon}</i>}
            {label}
        </ButtonContainer>
    )
}

export default Button;