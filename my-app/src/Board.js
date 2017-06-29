import React, { Component } from 'react';
import Square from './Square';
import './Board.css';


function Board(props){
  return (
    <div className="board">
      {
        props.board.map((row, i) =>
          <div key={i} className="row">
            {
              row.map((sq, i) =>
                <Square key={i} square={sq} row={row} handleClick={props.handleBoardClick} />
            )
          }
          </div>
        )
      }
    </div>
  );
}

export default Board;
