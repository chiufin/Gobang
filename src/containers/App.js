import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux'
import logo from '../images/stacccy.jpg';
import '../styles/App.css';
import Popup from './Popup';

class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.popupShow && <Popup />}
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Stacccy's Sample App</h2>
        </div>
        <div className="App-intro">{this.props.children}</div>
      </div>
    );
  }
}

export default connect(
  state => {
    return {
      popupShow: state.AppReducer.popup.show
    };
  },
  dispatch => ({
    // appActions: bindActionCreators({ ...appActions }, dispatch)
  })
)(App);
