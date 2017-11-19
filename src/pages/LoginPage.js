import { connect } from 'react-redux'
import React, { Component } from 'react'
import Input from '../components/Input'
import { bindActionCreators } from 'redux';
import * as authActions from '../actions/authActions'

class LogIn extends Component {
    constructor(props){
        super(props)
        this.login = this.login.bind(this)
    }

    login(){
        console.log(this)
        this.props.actions.login('chiufin@hotmail.com', 'cho123')
    }

    render(){
        return (
            <div>
                <h1>Sign In</h1>
                <Input id={'account'} placeholder={'Account'} />
                <Input id={'password'} placeholder={'Password'} type={'password'} />
                <button onClick={this.login}>Login</button> 


                <button onClick={this.props.actions.showPopup}>Show Popup</button>
            </div>
        )
    }
}



export default connect(
    (state, ownProps) => { console.log(state);console.log(ownProps);return { active: false }},
    (dispatch, ownProps) => ({
        actions: bindActionCreators({...authActions}, dispatch)
    })
)(LogIn)