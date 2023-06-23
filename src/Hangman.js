import React, { useEffect, useState } from 'react';
import './Hangman.css'; 

function Hangman() {
  const [randomWord, setRandomWord] = useState(''); //Random word from API
  const [guessedLetters, setGuessedLetters] = useState([]); // 
  const [showAnswer, setShowAnswer] = useState(false);  //// Show Answer Button
  const [guessCounter, setGuessCounter] = useState(6);
  const [gameOver, setGameOver] = useState(false);
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [gameWon, setGameWon] = useState(false);

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  const handleButtonClick = (letter) => {
    if (randomWord.includes(letter)) {
      setGuessedLetters([...guessedLetters, letter]);
    } else {
      setGuessCounter(guessCounter - 1);
    }
  
    setDisabledLetters([...disabledLetters, letter.toUpperCase()]);
  };

  useEffect(() => {
    if (guessCounter === 0) {
      setGameOver(true);
    }
  }, [guessCounter]);

  useEffect(() => {
    if (guessedLetters.length === randomWord.length) {
      setGameWon(true);
    }
  }, [guessedLetters, randomWord]);

  useEffect(() => {
    fetch('https://random-word-api.herokuapp.com/word')
      .then(response => response.json())
      .then(data => {
        const word = data[0];
        setRandomWord(word.toUpperCase());
      })
      .catch(error => {
        console.error('Error fetching random word:', error);
      });
  }, []);


  return (
    <div>
      <h1>Hangman Game</h1>
      <button onClick={toggleAnswer}>Answer</button>
      {showAnswer && <p>{randomWord}</p>}
      {gameOver && <p>You lose!</p>}
      {!gameOver && guessedLetters.length === [...new Set(randomWord)].length && <p>You win!</p>}
    <p>Guesses left: {guessCounter}</p>
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