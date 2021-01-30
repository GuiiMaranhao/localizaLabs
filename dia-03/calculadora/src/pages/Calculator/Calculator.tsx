import React, { useState, MouseEvent } from 'react';
import Display from '../../components/Display/Display';
import Button from '../../components/Button/Button';

import buttons from './data';

import { CalculatorContainer, ButtonsContainer } from './styles';

enum ActionCalculator {
    clearDisplay = 'C',
    deleteLastItem = '⌫',
    calculate = '=',
}

const Calculator = () => {
    const [expression, setExpression] = useState('');
    const [ result, setResult] = useState('');
    
    const calculate = (expression: string) => {
        return
    }

    const deleteLastElement = () => {
        setExpression(expression.slice(0, -1));
    }

    const clearDisplay = () => {
        setExpression('');
        setResult('');
    }

    const handleOnClick = (event: MouseEvent<HTMLButtonElement>) => {
        const currentButtonClick  = event.currentTarget.innerText;

        if (currentButtonClick === ActionCalculator.calculate)
            return

        if (currentButtonClick === ActionCalculator.clearDisplay)
            return clearDisplay();

        if (currentButtonClick === ActionCalculator.deleteLastItem)
            return deleteLastElement();
          
        setExpression(expression + currentButtonClick)
    };

    return (
        <CalculatorContainer>
        <Display expression={expression} result={result} />
            <ButtonsContainer>

            {buttons.map(button => (
                <Button label={button.label} color={button.color} backgroundColor={button.background} onClick={handleOnClick}/>
            ))}
            </ButtonsContainer>
        </CalculatorContainer>
    )
}

export default Calculator;