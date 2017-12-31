import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as counterActions from '../actions/counterActions';

class DivChessBoard extends Component {
  renderPiece(piece) {
    return piece === 'x' ? (
      <div className="board__piece__black" />
    ) : (
      <div className="board__piece__white" />
    );
  }

  render() {
    console.log('render ----- ');
    const { board, playing, playChess } = this.props;
    return (
      <div>
        <span>Div</span>

        <div>
          {board.map((line, y) => (
            <div className="board__line" key={`line` + y}>
              {line.map((piece, x) => (
                <div
                  className="board__piece"
                  key={`piece` + x}
                  onClick={playChess.bind(this, x, y)}
                >
                  {/* {console.log(piece)} */}
                  {piece ? this.renderPiece(piece) : null}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default DivChessBoard;
