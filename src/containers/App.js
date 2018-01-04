import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux'
import logo from '../images/stacccy.jpg';
import '../styles/styles.css';
import Popup from './Popup';

class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.popupShow && <Popup />}
        <div className="App__header">
          <img src={logo} className="App__logo" alt="logo" />
          <h3>Stacccy's 五子棋</h3>
        </div>
        <div className="App__intro">{this.props.children}</div>
      </div>
    );
  }
}

export default connect(
  state => {
    return {
      popupShow: state.PopupReducer.popup.show
    };
  },
  dispatch => ({
    // appActions: bindActionCreators({ ...appActions }, dispatch)
  })
)(App);
