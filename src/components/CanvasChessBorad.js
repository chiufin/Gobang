import React, { Component } from 'react';

class CanvasChessBorad extends Component {
  constructor(props) {
    super(props);
    this.clickChess = this.clickChess.bind(this);
    this.renderInitCanvas = this.renderInitCanvas.bind(this);
    this.smallDot = this.smallDot.bind(this);
  }

  componentDidMount() {
    this.refs.ctx = this.refs.canvas.getContext('2d');
    this.renderInitCanvas();
  }

  componentDidUpdate() {
    let { playing } = this.props;
    let playingLen = playing.length;
    if (playingLen > 0) {
      this.AddDot(
        playing[playingLen - 1].player,
        playing[playingLen - 1].x,
        playing[playingLen - 1].y
      );
    }
  }

  AddDot(player, x, y) {
    this.refs.ctx.beginPath();
    this.refs.ctx.arc(x * 30 + 30, y * 30 + 30, 10, 0, 2 * Math.PI);
    if (player === 'x') {
      this.refs.ctx.fillStyle = 'black';
    } else if (player === 'o') {
      this.refs.ctx.fillStyle = 'white';
    }
    this.refs.ctx.fill();
  }

  line(lines, height) {
    for (let i = 0; i < lines; i++) {
      this.refs.ctx.moveTo(30, height * i + height);
      this.refs.ctx.lineWidth = 0.5;
      this.refs.ctx.lineTo(450, height * i + height);
    }
    this.refs.ctx.stroke();
  }

  row(lines, width) {
    for (let i = 0; i < lines; i++) {
      this.refs.ctx.moveTo(width * i + width, 30);
      this.refs.ctx.lineTo(width * i + width, 450);
    }
    this.refs.ctx.stroke();
  }

  smallDot() {
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 2; j++) {
        this.refs.ctx.beginPath();
        this.refs.ctx.arc(i * 240 + 120, j * 240 + 120, 3, 0, 2 * Math.PI);
        this.refs.ctx.fillStyle = '#666';
        this.refs.ctx.fill();
      }
    }
    this.refs.ctx.beginPath();
    this.refs.ctx.arc(240, 240, 3, 0, 2 * Math.PI);
    this.refs.ctx.fillStyle = '#666';
    this.refs.ctx.fill();
  }

  renderInitCanvas() {
    this.refs.ctx.beginPath();

    this.line(15, 30);
    this.row(15, 30);
    this.smallDot();
  }

  clickChess(e) {
    let x = (e.pageX - this.refs.canvas.offsetLeft) / 30;
    let y = (e.pageY - this.refs.canvas.offsetTop) / 30;

    let roundingX = Math.round(Math.floor(x * 10) / 10) - 1;
    let roundingY = Math.round(Math.floor(y * 10) / 10) - 1;
    if (
      roundingX >= 0 &&
      roundingY >= 0 &&
      roundingX < this.props.board[0].length &&
      roundingY < this.props.board.length
    ) {
      this.props.playChess(roundingX, roundingY);
    }

    // let player;
    // let { playing } = this.props;
    // let playingLen = playing.length;
    // if (playingLen === 0) {
    //   player = 'x';
    // } else if (playing[playingLen - 1].player === 'x') {
    //   player = 'o';
    // } else if (playing[playingLen - 1].player === 'o') {
    //   player = 'x';
    // }

    // if (!this.props.board[roundingY][roundingX]) {
    //   this.AddDot(player, roundingX, roundingY);
    // }
  }

  render() {
    return (
      <div>
        <div>
          <canvas
            ref="canvas"
            id="myCanvas"
            onClick={this.clickChess}
            width="480"
            height="480"
            style={{ background: '#EEE' }}
          />
        </div>
      </div>
    );
  }
}

export default CanvasChessBorad;
