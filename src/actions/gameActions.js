import ActionTypes from '../constants/ActionTypes';

export const newStep = (x, y) => ({
  type: ActionTypes.NEW_STEP,
  x,
  y
});

export const isCanvasSupported = isCanvasSupport => ({
  type: ActionTypes.IS_CANVAS_SUPPORTED,
  isCanvasSupport
});
