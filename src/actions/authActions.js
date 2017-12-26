import ActionTypes from '../constants/ActionTypes';
import fetchAction from './fetchErrActions';
import { SubmissionError } from 'redux-form';

export const login = (account, password) => dispatch => {
  let payload = {
    body: {
      account: account,
      password: password
    }
  };

  return dispatch(fetchAction('login', payload))
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => {
      console.log(err);
      throw new SubmissionError('dddd');
    });
};

export const signOut = () => ({
  type: ActionTypes.CLEAN_STORE
});

export const showPopup = () => dispatch =>
  dispatch({
    type: ActionTypes.POPUP_APPEAR,
    condition: 'uhOh'
  });
