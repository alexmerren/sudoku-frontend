import React from 'react';
import SudokuBoard from './components/sudokuBoard.js';
import './styles/app.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Sudoku</h1>
      </header>
      <SudokuBoard />
    </div>
  )
}

export default App;
