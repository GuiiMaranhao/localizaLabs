import styled from 'styled-components';

export const Label = styled.span`
    display: block;
`;

export const InputCustom = styled.input`
    padding: 10px;
    background: #f6f6f6;
    border: 1px solid #777;
    border-radius: 4px;
    outline: 0;

    &:focus {
        border-color: #000;
    }
`;