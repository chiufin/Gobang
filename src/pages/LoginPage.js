import { connect } from 'react-redux'
import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import * as authActions from '../actions/authActions'
import SignInForm from '../forms/SignInForm'
class LogIn extends Component {
    constructor(props){
        super(props)
        this.login = this.login.bind(this)
    }

    login(values){
        console.log(values)
        return this.props.actions.login('chiufin@hotmail.com', 'cho123')
    }

    render(){
        return (
            <div>
                <h1>Sign In</h1>
                <SignInForm onSubmit={this.login}/>
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