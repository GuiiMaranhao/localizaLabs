import React from 'react';
import Input from './components/Input/Input';
import DateInput from './components/DataInput/DataInput'

function App() {
  return (
    <>
      <h1>localiza</h1>
      <Input label="Digite o locall de retirada"/>
      <DateInput startDate={new Date()} />
    </>
  );
}

export default App;
