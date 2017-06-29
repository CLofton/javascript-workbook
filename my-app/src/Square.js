import React, { Component } from 'react';
import './Board.css';


function Square(props){
  return (
    <div className="square">
      {props.board}
    </div>
  )
}

export default Square;
