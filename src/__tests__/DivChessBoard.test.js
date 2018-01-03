import React from 'react';
import ReactDOM from 'react-dom';
import DivChessBoard from '../components/DivChessBoard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  let board = [[null, null], [null, null]];
  let playChess = () => {};
  ReactDOM.render(<DivChessBoard board={board} playChess={playChess} />, div);
});
