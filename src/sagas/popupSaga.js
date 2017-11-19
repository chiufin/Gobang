import ActionTypes from '../constants/ActionTypes'
import { all, take, select, put, call } from 'redux-saga/effects'
import popupConfig from '../constants/PopupConfig'

/* -- watch click actions ---------------------- */

function* watchBtnClick() {
    while(true){
      const { whichBtn } = yield take(ActionTypes.POPUP_BTN_CLICK)
      const { AppReducer: { popup : { condition } } } = yield select()
      console.log("click btn:", condition)
      console.log("whichBtn:", whichBtn)
      yield put ({ type: ActionTypes.POPUP_DISAPPEAR })
      try {
        let sagaFnts = popupConfig[condition].sagaFnts
        if(sagaFnts){
          if(sagaFnts[whichBtn]){
             yield call(sagaFnts[whichBtn])
          }
        }
      } catch (error) {
        console.log(error)
      } 
    }
}

function* watchLinkClick() {
    while(true){
        yield take(ActionTypes.POPUP_LINK_CLICK)
        const { AppReducer: { popup : { condition } } } = yield select()
        yield put ({ type: ActionTypes.POPUP_DISAPPEAR })
      try {
        if(popupConfig[condition].linkFnt){
          let payload = {}
          switch(condition) {
            case 'parentalConsentCodeSent': 
              const { agreementReducer: { userData } } = yield select()
              if(userData){
                payload.email = userData.email
              }      
              break
            default:
          }
          yield call(popupConfig[condition].linkFnt, payload)
        }
      } catch (error) {
        console.log(error)
      } 
    }
}

/* -- watch click actions end ---------------------- */

function* watchPopupAppear() {
  while(true) {
    const { condition } = yield take(ActionTypes.POPUP_APPEAR)
    let payload = {} // for dynamic content use
    switch(condition) {
      case 'legalUpdate': 
      case 'legalDecline': 
        const { agreementReducer: { legalAgreements } } = yield select()
        if(legalAgreements){
          payload.legalName = legalAgreements[0].name
        }
        break
      case 'parentalConsentCodeSent': 
        const { agreementReducer: { userData } } = yield select()
        if(userData){
          payload.email = userData.email
        }      
        break
      default:
    }
    // yield call(fillOutLegalContent, legalAgreements)
    yield put({type: ActionTypes.POPUP_CONTENT,
               condition,
               payload
              })


  }
}


export default function* rootSaga() {
  yield all([
    call(watchPopupAppear),
    call(watchBtnClick),
    call(watchLinkClick)
  ])
}