import ActionTypes from '../constants/ActionTypes';

export const increase = () => ({
  type: ActionTypes.INCREASE
});

export const decrease = () => ({
  type: ActionTypes.DECREASE
});

export const newStep = (newStep, player) => ({
  type: ActionTypes.NEW_STEP,
  newStep,
  player
});
