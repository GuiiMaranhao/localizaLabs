import defineStylesButton from "../../ultils/defineStylesButton";

interface IListButtons {
  label: string;
  background: string;
  color: string;
}

const buttonsSymbol = [
    '(', ')', '⌫', 'C',
    '7', '8', '9', '÷',
    '4', '5', '6', '×',
    '1', '2', '3', '-',
    '0', '.', '=', '+'
]

const buttonsList: IListButtons[] = buttonsSymbol.map((symbol) => {
    const styles = defineStylesButton(symbol);
    return {
      label: symbol,
      background: styles.background,
      color: styles.color,
    };
  });
  
  export default buttonsList;