import React from 'react';
import Header from './components/Header';
import Figure from './components/Figure';
import WrongLetters from './components/WrongLetters';
import Word from './components/Word';

import './App.css';

const words = ['application', 'programming', 'interface', 'wizard'];

let selectedWord = words[Math.floor(Math.random() * words.length)];

let playable = true;

function App() {
  return (
    <React.Fragment>
      <Header />
      <div className='game-container'>
        <Figure />
        <WrongLetters />
        <Word />
      </div>
    </React.Fragment>
  );
}

export default App;
