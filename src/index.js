import React from 'react';
import ReactDOM from 'react-dom';
import Hangman from './Hangman';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <Hangman />
  </React.StrictMode>,
  rootElement
);