import { connect } from 'react-redux'
import React, { Component } from 'react'

class SignIn extends Component {
    render(){
        return (
            <div>
                Sign In
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

    
})(SignIn)