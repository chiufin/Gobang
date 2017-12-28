import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as counterActions from '../actions/counterActions';

class AdminHome extends Component {
  constructor(props) {
    super(props);
    this.renderPiece = this.renderPiece.bind(this);
    this.renderResult = this.renderResult.bind(this);
    this.playChess = this.playChess.bind(this);
  }

  renderPiece(piece) {
    return piece === 'x' ? (
      <div className="board__piece__black" />
    ) : (
      <div className="board__piece__white" />
    );
  }

  renderResult(result) {
    switch (result) {
      case 'x':
        return '黑棋獲勝';
      case 'o':
        return '白棋獲勝';
      default:
        return '   -   ';
    }
  }

  playChess(x, y) {
    if (!this.props.board[y][x]) {
      this.props.actions.newStep([x, y], this.props.player);
    }
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Hello</h1>

        <div>
          <p>Player:{this.props.player === 'x' ? '黑' : '白'}</p>
          <p>Result:{this.renderResult(this.props.result)}</p>
        </div>

        <div>
          {this.props.board.map((line, y) => {
            return (
              <div className="board__line" key={`line` + y}>
                {line.map((piece, x) => {
                  return (
                    <div
                      className="board__piece"
                      key={`piece` + x}
                      onClick={this.playChess.bind(this, x, y)}
                    >
                      {piece ? this.renderPiece(piece) : null}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>

        <hr />
        {this.props.num}
        {<button onClick={this.props.actions.increase}>+</button>}
        {<button onClick={this.props.actions.decrease}>-</button>}
      </div>
    );
  }
}

export default connect(
  (state, ownProps) => ({
    num: state.CounterReducer.num,
    board: state.CounterReducer.board,
    result: state.CounterReducer.result,
    player: state.CounterReducer.player
  }),
  (dispatch, ownProps) => ({
    actions: bindActionCreators({ ...counterActions }, dispatch)
  })
)(AdminHome);
