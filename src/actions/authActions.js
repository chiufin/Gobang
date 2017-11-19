import ActionTypes from '../constants/ActionTypes'
import fetchAction from './fetchErrActions'

export const login = (account, password) => dispatch => {
    let payload = {
        body: {
            account: account,
            password: password
        }
    }

    return dispatch(fetchAction('login', payload))
    .then( res => res.json())
    .then( json => console.log(json))
    .catch( err => console.log(err))
}


export const signOut = () => ({
    type: ActionTypes.CLEAN_STORE
})