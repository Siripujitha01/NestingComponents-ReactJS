import React from 'react';
import ReactDOM from 'react-dom';
import Button from'./button.js';
import Content from './content.js';
import './styel.css';

const App=()=>{
  return(
    <Button>
      <Content /> 
    </Button>
  )
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

