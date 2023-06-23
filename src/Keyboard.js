import React from 'react';

const Keyboard = ({ letters, disabledLetters, onClick }) => {
  const handleButtonClick = (letter) => {
    onClick(letter);
  };

  return (
    <div>
      {letters.map((letter) => (
        <button
          key={letter}
          onClick={() => handleButtonClick(letter)}
          disabled={disabledLetters.includes(letter)}
        >
          {letter}
        </button>
      ))}
    </div>
  );
};

export default Keyboard;