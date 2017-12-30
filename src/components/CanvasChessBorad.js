import { connect } from 'react-redux';
import React, { Component } from 'react';

class CanvasChessBorad extends Component {
  constructor(props) {
    super(props);
    this.playChess = this.playChess.bind(this);
  }

  componentDidMount() {
    this.refs.ctx = this.refs.canvas.getContext('2d');
    this.renderInitCanvas();

    console.log(this);
    // var bodyRect = document.body.getBoundingClientRect(),
    // elemRect = c.getBoundingClientRect(),
    // offset   = elemRect.top - bodyRect.top;
    // console.log(document.body.getBoundingClientRect())
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

    let dots = [
      {
        player: 'x',
        x: 1,
        y: 2
      },
      {
        player: 'o',
        x: 2,
        y: 1
      },
      {
        player: 'x',
        x: 3,
        y: 3
      },
      {
        player: 'o',
        x: 2,
        y: 5
      }
    ];

    for (let i = 0; i < dots.length; i++) {
      this.AddDot(dots[i].player, dots[i].x, dots[i].y);
    }
  }

  playChess(e) {
    console.log('playChess');
    let x = (e.pageX - 215) / 30;
    let y = (e.pageY - 325) / 30;

    // console.log(`${e.pageX},${e.pageY}`)
    // console.log(`${x},${y}`)

    let roundingX = Math.round(Math.floor(x * 10) / 10);
    let roundingY = Math.round(Math.floor(y * 10) / 10);

    // console.log(`${roundingX},${roundingY}`)

    this.AddDot(this.props.player, roundingX, roundingY);
  }

  render() {
    return (
      <div>
        <span>Canvas</span>
        <div style={{ margin: '30px' }}>
          <canvas
            ref="canvas"
            id="myCanvas"
            onClick={this.playChess}
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
