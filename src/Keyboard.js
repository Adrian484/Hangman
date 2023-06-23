import React from 'react';

const Keyboard = ({ letters, disabledLetters, onClick }) => {
  // Define the rows of the keyboard
  const keyboardRows = ['QWERTYUIOP', 'ASDFGHJKL', 'ZXCVBNM'];

  return (
    <div className="keyboard">
      {keyboardRows.map((row, rowIndex) => (
        <div key={rowIndex} className="keyboard-row">
          {row.split('').map((letter, index) => (
            <button
              key={index}
              onClick={() => onClick(letter)}
              disabled={disabledLetters.includes(letter)}
            >
              {letter}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;