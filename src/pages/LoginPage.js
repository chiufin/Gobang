import { connect } from 'react-redux'
import React, { Component } from 'react'
import Input from '../components/Input'

class LogIn extends Component {
    constructor(props){
        super(props)
        this.signIn = this.signIn.bind(this)
    }

    signIn(){
        console.log('sign in')
    }

    render(){
        return (
            <div>
                <h1>Sign In</h1>
                <Input id={'account'} placeholder={'Account'} />
                <Input id={'password'} placeholder={'Password'} type={'password'} />
                <button onClick={this.signIn}>SignIn</button> 
            </div>
        )
    }
}



export default connect(
    (state, ownProps) => { console.log(state);console.log(ownProps);return { active: false }},
    (dispatch, ownProps) => { return {
        onClick: () => {
        dispatch({type: 'Hello'})
        }
    }
})(LogIn)