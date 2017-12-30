import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as counterActions from '../actions/counterActions';
import CanvasChesBoard from '../components/CanvasChessBorad';
import DivChessBoard from '../components/DivChessBoard';

class CanvasPage extends Component {
  constructor(props) {
    super(props);
    this.playChess = this.playChess.bind(this);
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
    const { result, player, board } = this.props;

    return (
      <div>
        <div>
          {result === null ? (
            <p>Player:{player === 'x' ? '黑' : '白'}</p>
          ) : null}
          <p>Result:{this.renderResult(result)}</p>
        </div>

        <CanvasChesBoard
          board={board}
          result={result}
          player={player}
          playChess={this.playChess}
        />

        {/* <DivChessBoard board={board} 
                       result={result} 
                       player={player}
                       playChess={this.playChess}/> */}
      </div>
    );
  }
}

export default connect(
  (state, ownProps) => ({
    board: state.CounterReducer.board,
    result: state.CounterReducer.result,
    player: state.CounterReducer.player
  }),
  (dispatch, ownProps) => ({
    actions: bindActionCreators({ ...counterActions }, dispatch)
  })
)(CanvasPage);
