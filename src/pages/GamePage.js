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
      this.props.actions.newStep(x, y);
    }
  }

  renderPlayer(playing) {
    if (playing.length === 0) {
      return <p>Player: 黑</p>;
    } else if (playing[playing.length - 1].player === 'o') {
      return <p>Player: 黑</p>;
    } else if (playing[playing.length - 1].player === 'x') {
      return <p>Player: 白</p>;
    }
  }

  render() {
    const { result, board, playing } = this.props;

    return (
      <div>
        <div>
          {this.renderPlayer(playing)}
          <p>Result:{this.renderResult(result)}</p>
        </div>

        {/* <CanvasChesBoard
          board={board}
          playChess={this.playChess}
        /> */}

        <DivChessBoard
          board={board}
          playing={playing}
          playChess={this.playChess}
        />
      </div>
    );
  }
}

export default connect(
  (state, ownProps) => ({
    board: state.CounterReducer.board,
    result: state.CounterReducer.result,
    playing: state.CounterReducer.playing
  }),
  (dispatch, ownProps) => ({
    actions: bindActionCreators({ ...counterActions }, dispatch)
  })
)(CanvasPage);
