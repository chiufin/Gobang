import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as popupActions from '../actions/popupActions'
import BasicPopup from '../components/BasicPopup'
import SingleBtnPopupGrey from '../components/SingleBtnPopupGrey'
// import SingleBtnPopupWhite from '../components/SingleBtnPopupWhite'

class Popup extends React.Component {
  constructor(props) {
    super(props)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleLinkClick = this.handleLinkClick.bind(this)
  }

  handleLinkClick() {
    this.props.actions.popupLinkOnClick()
  }

  handleBtnClick(whichBtn) {
    const { fnts, actions } = this.props.state.popup
    let certainFnt
    let certainAction
    if (fnts) {
      certainFnt = fnts[whichBtn] && fnts[whichBtn]
    } else if(actions){
      certainAction = actions[whichBtn] && actions[whichBtn]
    } 
    this.props.actions.popupOnClick(certainFnt, certainAction, whichBtn)
  }

  render() {
    const { content, template } = this.props.state.popup
    switch (template) {
      case 'singleBtnGrey':
        return (
          <SingleBtnPopupGrey
            title={content.title}
            message={content.message}
            btns={content.buttons}
            linkMessage={content.linkMessage}
            link={this.handleLinkClick}
            leftFnt={this.handleBtnClick.bind(this, 0)}
          />
        )
      default:
        //default is duo button popup
        return (
          <BasicPopup
            title={content.title}
            message={content.message}
            btns={content.buttons}
            leftFnt={this.handleBtnClick.bind(this, 0)}
            rightFnt={this.handleBtnClick.bind(this, 1)}
          />
        )
    }
  }
}

export default connect(
  state => ({
    state: state.AppReducer
  }),
  dispatch => ({
    actions: bindActionCreators(popupActions, dispatch)
  })
)(Popup)