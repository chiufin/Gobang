import ActionTypes from '../constants/ActionTypes';

export const newStep = (x, y) => ({
  type: ActionTypes.NEW_STEP,
  x,
  y
});
