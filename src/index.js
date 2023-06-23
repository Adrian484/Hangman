import React from 'react';
import ReactDOM from 'react-dom';
import Hangman from './Hangman';

const App = () => {
  const generateRandomColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const color = `rgb(${red}, ${green}, ${blue})`;
    document.body.style.backgroundColor = color;
  };

  // Generate random background color on initial page load
  React.useEffect(() => {
    generateRandomColor();
  }, []);

  return <Hangman generateRandomColor={generateRandomColor} />;
};

ReactDOM.render(<App />, document.getElementById('root'));


const rootElement = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <Hangman />
  </React.StrictMode>,
  rootElement
);