import ActionTypes from '../constants/ActionTypes';

export const increase = () => ({
  type: ActionTypes.INCREASE
});

export const decrease = () => ({
  type: ActionTypes.DECREASE
});

export const checkResult = () => ({
  type: ActionTypes.CHECK_RESULT
});
