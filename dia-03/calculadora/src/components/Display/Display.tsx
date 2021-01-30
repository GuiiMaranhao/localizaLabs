import React, { FC } from 'react';
import { IProps } from './types';

import { DisplayContainer } from './styles';

const Display: FC<IProps> = ({ expression, result}) => {
    return (
        <DisplayContainer>
            <div>{result} =</div>
            <div>{expression}</div>
        </DisplayContainer>
    );
}

export default Display;