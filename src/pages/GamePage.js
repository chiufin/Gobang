import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as gameActions from '../actions/gameActions';
import CanvasChesBoard from '../components/CanvasChessBorad';
import DivChessBoard from '../components/DivChessBoard';

class CanvasPage extends Component {
  constructor(props) {
    super(props);
    this.playChess = this.playChess.bind(this);
    this.isCanvasSupported = this.isCanvasSupported.bind(this);
  }

  isCanvasSupported() {
    var elem = document.createElement('canvas');
    return !!(elem.getContext && elem.getContext('2d'));
  }

  componentWillMount() {
    let boolean = this.isCanvasSupported();
    console.log(boolean);
    this.props.actions.isCanvasSupported(boolean);
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
    if (!this.props.gameReducer.board[y][x]) {
      this.props.actions.newStep(x, y);
    }
  }

  renderPlayer(playing) {
    if (
      this.props.gameReducer.result === 'x' ||
      this.props.gameReducer.result === 'o'
    ) {
      return null;
    } else {
      let playingLen = playing.length;
      if (playingLen === 0) {
        return <p>现在玩家: 黑</p>;
      } else if (playing[playingLen - 1].player === 'o') {
        return <p>现在玩家: 黑</p>;
      } else if (playing[playingLen - 1].player === 'x') {
        return <p>现在玩家: 白</p>;
      }
    }
  }

  render() {
    const {
      result,
      board,
      playing,
      isCanvasSupported
    } = this.props.gameReducer;
    console.log(this);
    return (
      <div>
        <div>
          {this.renderPlayer(playing)}
          <p>Result:{this.renderResult(result)}</p>
        </div>

        {isCanvasSupported ? (
          <CanvasChesBoard
            board={board}
            playing={playing}
            playChess={this.playChess}
          />
        ) : (
          <DivChessBoard
            board={board}
            playing={playing}
            playChess={this.playChess}
          />
        )}
      </div>
    );
  }
}

export default connect(
  (state, ownProps) => ({
    gameReducer: state.GameReducer
  }),
  (dispatch, ownProps) => ({
    actions: bindActionCreators({ ...gameActions }, dispatch)
  })
)(CanvasPage);
