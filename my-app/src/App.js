import React, { Component } from 'react';
import Board from './Board';
import './App.css';
import './Board.css';

function App (props){
  let board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ];
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
            <Board board={board}/>
        </div>
      </div>
    );
}

export default App;
