import React, { Component } from 'react';

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

  renderSideSmallDot() {
    let renderLine = [];
    let renderAll = [];

    for (let i = 0; i < 2; i++) {
      renderLine.push(
        <div className="board__smalldot__block" key={`smalldot-${i}`}>
          <div className="board__smalldot" />
        </div>
      );
    }
    for (let j = 0; j < 2; j++) {
      renderAll.push(
        <div className="board__smalldot__line" key={`line-${j}`}>
          {renderLine}
        </div>
      );
    }
    return <div className="board__smalldot--overlay">{renderAll}</div>;
  }

  renderCenterSmallDot() {
    return (
      <div className="board__smalldot--overlay--center">
        <div className="board__smalldot" />
      </div>
    );
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
    return <div className="board__overlay">{renderLine}</div>;
  }

  render() {
    const { board, playChess } = this.props;
    return (
      <div>
        <span>Div</span>

        <div className="board__bcg">
          {this.renderBlock(board[0].length, board.length)}
          {this.renderCenterSmallDot()}
          {this.renderSideSmallDot()}
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

export default DivChessBoard;
