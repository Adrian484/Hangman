import React, { useEffect, useState } from 'react';
import './Hangman.css';

function Hangman() {
  const [randomWord, setRandomWord] = useState('');
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [showAnswer, setShowAnswer] = useState(false);
  const [guessCounter, setGuessCounter] = useState(6);
  const [gameOver, setGameOver] = useState(false);
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [gameEnded, setGameEnded] = useState(false);
  const [winCount, setWinCount] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState('');

  const fetchRandomWord = () => {
    fetch('https://random-word-api.herokuapp.com/word')
      .then(response => response.json())
      .then(data => {
        const word = data[0];
        setRandomWord(word.toUpperCase());
      })
      .catch(error => {
        console.error('Error fetching random word:', error);
      });
  };

  useEffect(() => {
    generateRandomColor();
  }, []);

  const generateRandomColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const color = `rgb(${red}, ${green}, ${blue})`;
    setBackgroundColor(color);
  };

  const handleBackgroundColorChange = () => {
    generateRandomColor();
  };

  const handleReset = () => {
    setGuessCounter(6);
    setGuessedLetters([]);
    setDisabledLetters([]);
    setGameOver(false);
    setGameEnded(false);
    fetchRandomWord();
  };

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  const handleButtonClick = (letter) => {
    if (gameEnded) {
      return;
    }
  
    if (guessedLetters.includes(letter.toUpperCase())) {
      return; // Letter already guessed, do nothing
    }
  
    if (randomWord.includes(letter)) {
      setGuessedLetters([...guessedLetters, letter]);
    } else {
      setGuessCounter(guessCounter - 1);
    }
  
    setDisabledLetters([...disabledLetters, letter.toUpperCase()]);
  
    const uniqueLetters = [...new Set(randomWord.split(''))];
    const remainingLetters = uniqueLetters.filter((char) => !guessedLetters.includes(char));
    const correctGuesses = remainingLetters.length === 1 && remainingLetters[0] === letter.toUpperCase();
  
    if (correctGuesses) {
      setGameEnded(true);
      setWinCount(winCount + 1);
    }
  };

  useEffect(() => {
    if (guessCounter === 0) {
      setGameEnded(true);
      setGameOver(true);
    }
  }, [guessCounter]);

  useEffect(() => {
    if (guessedLetters.length === randomWord.length) {
    }
  }, [guessedLetters, randomWord]);

  useEffect(() => {
    fetchRandomWord();
  }, []);

  return (
   
    <div style={{ backgroundColor: backgroundColor }}>

      <h1>Hangman Game</h1>
      <button onClick={handleReset}>Reset</button>
      <button onClick={toggleAnswer}>Answer</button>
      <button onClick={handleBackgroundColorChange}>Change Background Color</button>
      {showAnswer && <p>{randomWord}</p>}
      {gameOver && <p>You lose!</p>}
      {!gameOver && guessedLetters.length === [...new Set(randomWord)].length && <p>You win!</p>}
      <p>Guesses left: {guessCounter}</p>
      <p>Win Count: {winCount}</p>
      <div className="word-container">
        {randomWord.split('').map((letter, index) => (
          <div key={index} className="letter-container">
            <span className="letter">
              {guessedLetters.includes(letter.toUpperCase()) ? letter.toUpperCase() : ''}
            </span>
            <span className="underline">
              {guessedLetters.includes(letter.toUpperCase()) ? '' : '_'}
            </span>
          </div>
        ))}
      </div>
      <div className="keyboard">
        {Array.from(Array(26), (_, index) => {
          const letter = String.fromCharCode(65 + index);
          return (
            <button
              key={letter}
              onClick={() => handleButtonClick(letter)}
              disabled={disabledLetters.includes(letter.toUpperCase())}
            >
              {letter}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Hangman;





// import React, { useEffect, useState } from 'react';
// import Keyboard from './Keyboard';
// import Word from './Word';
// import RandomWord from './RandomWord';

// function Hangman() {
//   const [randomWord, setRandomWord] = useState('');
//   const [guessedLetters, setGuessedLetters] = useState([]);
//   const [disabledLetters, setDisabledLetters] = useState([]);

//   useEffect(() => {
//     fetch('https://random-word-api.herokuapp.com/word')
//       .then(response => response.json())
//       .then(data => {
//         const word = data[0];
//         setRandomWord(word);
//       })
//       .catch(error => {
//         console.error('Error fetching random word:', error);
//       });
//   }, []);

//   const handleLetterClick = (letter) => {
//     setGuessedLetters([...guessedLetters, letter]);
//     setDisabledLetters([...disabledLetters, letter]);
//   };

//   return (
//     <div>
//       <h1>Hangman Game</h1>
//       <RandomWord word={randomWord} />
//       <Word word={randomWord} guessedLetters={guessedLetters} />
//       <Keyboard
//         letters={['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']}
//         disabledLetters={disabledLetters}
//         onClick={handleLetterClick}
//       />
//     </div>



    
//   );
// }

// export default Hangman;