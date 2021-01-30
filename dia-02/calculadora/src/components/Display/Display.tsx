import React, { FC } from 'react';
import { IProps } from './types';

import { DisplayContainer } from './styles';

const Display: FC<IProps> = ({ expression, result}) => {
    return (
        <DisplayContainer>
            <div>{expression} =</div>
            <div>{result}</div>
        </DisplayContainer>
    );
}

export default Display;