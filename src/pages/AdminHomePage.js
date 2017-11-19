import { connect } from 'react-redux'
import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import * as counterActions from '../actions/counterActions'

class AdminHome extends Component {

    render(){
        return (
            <div>
                <h1>Admin Home Page</h1>
                {this.props.num}
                {<button onClick={this.props.actions.increase}>+</button>}
                {<button onClick={this.props.actions.decrease}>-</button>}
            </div>
        )
    }
}



export default connect(
    (state, ownProps) => ({ 
        num: state.CounterReducer.num        
    }),
    (dispatch, ownProps) => ({
        actions: bindActionCreators({...counterActions}, dispatch)
    })
)(AdminHome)