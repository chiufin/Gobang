import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as counterActions from '../actions/counterActions';

class Canvas extends Component {
  //   constructor(props) {
  //     super(props);
  //   }

  render() {
    return (
      <div>
        <h1>Canvas</h1>
      </div>
    );
  }
}

export default connect(
  (state, ownProps) => ({}),
  (dispatch, ownProps) => ({
    actions: bindActionCreators({ ...counterActions }, dispatch)
  })
)(Canvas);
