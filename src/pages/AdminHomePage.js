import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as counterActions from '../actions/counterActions';

class AdminHome extends Component {
  constructor(props) {
    super(props);
    this.renderPiece = this.renderPiece.bind(this);
  }

  renderPiece(piece) {
    return piece === 'x' ? (
      <div className="board__piece__black" />
    ) : (
      <div className="board__piece__white" />
    );
  }

  render() {
    return (
      <div>
        <h1>Hello</h1>

        <div>
          <p>Player:{this.props.player ? '黑' : '白'}</p>
        </div>

        <div>
          {this.props.board.map((line, i) => {
            return (
              <div className="board__line" key={`line` + i}>
                {line.map((piece, i) => {
                  return (
                    <div className="board__piece" key={`piece` + i}>
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
    board: state.CounterReducer.board
  }),
  (dispatch, ownProps) => ({
    actions: bindActionCreators({ ...counterActions }, dispatch)
  })
)(AdminHome);
