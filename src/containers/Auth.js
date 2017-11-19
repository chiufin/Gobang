import { connect } from 'react-redux'
import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import * as authActions from '../actions/authActions'
import Nav from '../components/Nav'

class Auth extends Component {

    render(){
        return (
            <div>
                <Nav userName={this.props.userName} signOut={this.props.actions.signOut}/>
                {this.props.children}
            </div>
        )
    }
}



export default connect(
    (state, ownProps) => ({ 
        userName: state.AuthReducer.userName        
    }),
    (dispatch, ownProps) => ({
        actions: bindActionCreators({...authActions}, dispatch)
    })
)(Auth)