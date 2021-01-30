import React from 'react';
import Button from './components/Button/Button';
import Display from './components/Display/Display';

function App() {
  return (
    <>
      <Display expression="25+5" result="30" />
      <Button 
        label="0" 
        backgroundColor="#000" 
        color="#fff" 
        onClick={() => console.log('ok')} 
      />
    </>
  );
}

export default App;
