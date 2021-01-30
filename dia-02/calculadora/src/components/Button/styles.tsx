import styled, { css } from 'styled-components';

type ButtonContainerProps = {
    backgroundColor: string;
    color: string;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
    background: ${props => props.backgroundColor};
    color: ${props => props.color};
    width: 50px;
    height: 50px;
    border: 0;
    outline: none;
    border-radius: 8px;
    font-size: 25px;
`;