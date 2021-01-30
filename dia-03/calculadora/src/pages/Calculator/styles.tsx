import styled from 'styled-components';

export const CalculatorContainer = styled.div`
   background: #1e1e1e;
   margin: 0 auto;
   width: 260px;
   border-radius: 8px;
   overflow: hidden;
`;

export const ButtonsContainer = styled.div`
   padding: 15px;
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   gap:8px;`;