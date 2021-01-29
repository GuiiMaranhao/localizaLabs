import React, { useEffect, useState } from 'react';

function App() {
  const [number, setNumber] = useState(0);
  const [value, setValue] = useState('');

  useEffect(() => {
    console.log('oi')
  }, [])

  const handleOnClick = () => {
    setNumber(number + 1)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleOnChange = (e) => {
    const inputValue = e.target.value;

    setValue(inputValue)
  }

  return (
    <>
      <h1>Localiza</h1>
      <button onClick={handleOnClick}>Contador</button>
      <p>{number}</p>

      <h1>===================</h1>

      <form onSubmit={handleSubmit}>
        <input defaultValue={value} onChange={handleOnChange} />
        <button>Enviar</button>
      </form>
    </>
  );
}

export default App;
