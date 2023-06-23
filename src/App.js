import React, { useState } from 'react';

function App() {
  const [letters, setLetters] = useState([]);

  const handleButtonClick = () => {
    setLetters([...letters, 'A']);
  };

  return (
    <div className="App">
      <button onClick={handleButtonClick}>Add Letter</button>
      {letters.map((letter, index) => (
        <span key={index}>{letter}</span>
      ))}
    </div>
  );
}

export default App;