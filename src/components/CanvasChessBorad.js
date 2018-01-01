import { connect } from 'react-redux';
import React, { Component } from 'react';

class CanvasChessBorad extends Component {
  constructor(props) {
    super(props);
    this.clickChess = this.clickChess.bind(this);
    this.renderInitCanvas = this.renderInitCanvas.bind(this);
    this.renderChess = this.renderChess.bind(this);
    this.smallDot = this.smallDot.bind(this);
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

  renderChess() {
    let { playing } = this.props;
    for (let i = 0; i < playing.length; i++) {
      this.AddDot(playing[i].player, playing[i].x, playing[i].y);
    }
  }

  clickChess(e) {
    console.log('playChess');
    let x = (e.pageX - this.refs.canvas.offsetLeft) / 30;
    let y = (e.pageY - this.refs.canvas.offsetTop) / 30;

    // console.log(`offsetTop: ${this.refs.canvas.offsetLeft},${this.refs.canvas.offsetTop}`);
    // console.log(`screen: ${e.screenX},${e.screenY}`);
    // console.log(`client: ${e.clientX},${e.clientY}`);
    // console.log(`page: ${e.pageX},${e.pageY}`);
    // console.log(`${x},${y}`);

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
