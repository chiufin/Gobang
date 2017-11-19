// import { push } from 'react-router-redux'
// import { put, select, fork } from 'redux-saga/effects'
// import { redirectPage } from '../sagas'

//how to use?
/*
{
    type: ActionTypes.POPUP_APPEAR,
    condition: 'paymentFailed'
}
*/

//template : 3 layouts 
//singleBtnGrey, singleBtnWhite , default

//content : 2 type - function(dynamic content), object(static content)
//* dynamic content use "payload" as variable

//buttons click -> sagaFnts run 
//sagaFnts : no need to setting popup closing 

//linkMessage click -> linkFnt run


export default {
    uhOh : {
        template: 'singleBtnGrey',
        content: {
            title: ["Uh Oh!"],
            message: "Something went wrong. Please try again.",
            buttons: ['OK']
        }
    }
}