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
    this.renderSkill = this.renderSkill.bind(this);
  }

  isCanvasSupported() {
    var elem = document.createElement('canvas');
    return !!(elem.getContext && elem.getContext('2d'));
  }

  componentWillMount() {
    let boolean = this.isCanvasSupported();
    this.props.actions.isCanvasSupported(false);
  }

  renderResult(result) {
    switch (result) {
      case 'x':
        return <p>结果:黑棋获胜</p>;
      case 'o':
        return <p>结果:白棋获胜</p>;
      default:
        return null;
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
        return <p>现在玩家 黑棋</p>;
      } else if (playing[playingLen - 1].player === 'o') {
        return <p>现在玩家 黑棋</p>;
      } else if (playing[playingLen - 1].player === 'x') {
        return <p>现在玩家 白棋</p>;
      }
    }
  }

  renderSkill(boolean) {
    if (boolean === true) {
      return <p>渲染方式 Canvas</p>;
    } else if (boolean === false) {
      return <p>渲染方式 Div</p>;
    } else {
      return null;
    }
  }

  render() {
    const {
      result,
      board,
      playing,
      isCanvasSupported
    } = this.props.gameReducer;
    return (
      <div>
        <div className="board__status">
          {this.renderPlayer(playing)}
          {this.renderResult(result)}
          {this.renderSkill(isCanvasSupported)}
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
