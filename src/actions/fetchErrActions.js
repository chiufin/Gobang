import apiLibrary from '../utils/apiLibrary'
import { push } from 'react-router-redux'
import ActionTypes from '../constants/ActionTypes'

let fetchAction = (fetchName, payload) => dispatch => {
    return apiLibrary(fetchName, payload)
    .then(res => {
        return res
    })
    .catch(err => {
        console.log(`%cErr:`, "color: orange" )
        console.log(err)
        let errStatus = err.status
        switch(errStatus){
            case 401:
                dispatch(push('sessionExpired'))
            break;
            case 403:
                console.log(`%cPermission denied:`, "color: orange" )            // dispatch(push('sessionExpired'))
            break;
            default:
                if(errStatus >= 500){
                    Promise.resolve({
                        status: err.status
                    })
                    .then(err => {
                        console.log(err)
                        dispatch({
                        type: ActionTypes.SERVER_ERROR, 
                            errStatus: err.status
                        })
                        dispatch(push('serverError'))
                    })
                }else{
                    throw err
                }
        }
    
    })

}



export default fetchAction
