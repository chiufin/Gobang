import { connect } from 'react-redux';
import React, { Component } from 'react';

class CanvasChessBorad extends Component {
  constructor(props) {
    super(props);
    this.clickChess = this.clickChess.bind(this);
    this.renderInitCanvas = this.renderInitCanvas.bind(this);
    this.renderChess = this.renderChess.bind(this);
  }

  componentDidMount() {
    this.refs.ctx = this.refs.canvas.getContext('2d');
    this.renderInitCanvas();
  }

  AddDot(player, x, y) {
    this.refs.ctx.beginPath();
    this.refs.ctx.arc(x * 30, y * 30, 10, 0, 2 * Math.PI);
    if (player === 'x') {
      this.refs.ctx.fillStyle = 'black';
    } else if (player === 'o') {
      this.refs.ctx.fillStyle = 'white';
    }
    this.refs.ctx.fill();
  }

  line(lines, height) {
    console.log('line');

    for (let i = 0; i < lines; i++) {
      this.refs.ctx.moveTo(0, height * i + height);
      this.refs.ctx.lineTo(180, height * i + height);
    }
  }

  row(lines, width) {
    for (let i = 0; i < lines; i++) {
      this.refs.ctx.moveTo(width * i + width, 0);
      this.refs.ctx.lineTo(width * i + width, 180);
    }
  }

  renderInitCanvas() {
    this.refs.ctx.beginPath();

    this.line(5, 30);
    this.row(5, 30);
    this.refs.ctx.stroke();
  }

  renderChess() {
    let { playing } = this.props;
    for (let i = 0; i < playing.length; i++) {
      this.AddDot(playing[i].player, playing[i].x, playing[i].y);
    }
  }

  clickChess(e) {
    console.log('playChess');
    let x = (e.pageX - 210) / 30;
    let y = (e.pageY - 383) / 30;

    console.log(`${e.pageX},${e.pageY}`);
    console.log(`${x},${y}`);

    let roundingX = Math.round(Math.floor(x * 10) / 10);
    let roundingY = Math.round(Math.floor(y * 10) / 10);

    console.log(`${roundingX},${roundingY}`);
    this.props.playChess(roundingX, roundingY);

    let player;
    let { playing } = this.props;
    let playingLen = playing.length;
    if (playingLen === 0) {
      player = 'x';
    } else if (playing[playingLen - 1].player === 'x') {
      player = 'o';
    } else if (playing[playingLen - 1].player === 'o') {
      player = 'x';
    }
    this.AddDot(player, roundingX, roundingY);
  }

  render() {
    return (
      <div>
        <span>Canvas</span>
        <div style={{ margin: '30px' }}>
          <canvas
            ref="canvas"
            id="myCanvas"
            onClick={this.clickChess}
            width="180"
            height="180"
            style={{ border: '1px solid #000000', background: 'orange' }}
          />
        </div>
      </div>
    );
  }
}

export default CanvasChessBorad;
