import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as counterActions from '../actions/counterActions';

class DivChessBoard extends Component {
  renderChess(chess) {
    if (chess === 'x') {
      return <div className="board__chess--black" />;
    } else if (chess === 'o') {
      return <div className="board__chess--white" />;
    }
  }

  renderBlock(x, y) {
    let renderLine = [];
    let renderBlock = [];
    for (let i = 0; i < x - 1; i++) {
      renderBlock.push(<div className="board__piece" key={`block-${i}`} />);
    }
    for (let j = 0; j < y - 1; j++) {
      renderLine.push(
        <div className="board__line" key={`line-${j}`}>
          {renderBlock}
        </div>
      );
    }
    return <div>{renderLine}</div>;
  }

  renderClickArea(x, y) {
    let renderLine = [];
    let renderBlock = [];
    for (let i = 0; i < x; i++) {
      renderBlock.push(
        <div className="board__overlay__piece" key={`block-${i}`} />
      );
    }
    for (let j = 0; j < y; j++) {
      renderLine.push(
        <div className="board__overlay__line" key={`line-${j}`}>
          {renderBlock}
        </div>
      );
    }
    console.log(renderBlock);
    return <div className="board__overlay">{renderLine}</div>;
  }

  render() {
    const { board, playing, playChess } = this.props;
    return (
      <div>
        <span>Div</span>

        <div className="board__bcg">
          {this.renderBlock(board[0].length, board.length)}
          {/* {this.renderSmallDot()} */}
          <div className="board__overlay">
            {board.map((line, y) => (
              <div className="board__overlay__line" key={`line-${y}`}>
                {board[y].map((piece, x) => (
                  <div
                    className="board__overlay__piece"
                    onClick={playChess.bind(this, x, y)}
                    key={`block-${x}`}
                  >
                    {this.renderChess(board[y][x])}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
// onClick={playChess.bind(this, x, y)}

export default DivChessBoard;

// {board.map((line, y) => (
// 	<div className="board__line" key={`line` + y}>
// 	  {line.map((piece, x) => (
// 		<div
// 		  className="board__piece"
// 		  key={`piece` + x}
// 		>
// 	  {/* {piece ? this.renderPiece(piece) : null} */}
// 		</div>
// 		  ))}
// 	</div>
//   ))}
