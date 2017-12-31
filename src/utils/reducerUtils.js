import update from 'immutability-helper';

export const updateImmutableObject = (previousObj, newObj) =>
  update(previousObj, newObj);

export const updateObject = (previousObj, newObj) =>
  Object.assign({}, previousObj, newObj);

export const createReducer = (initialState, handlers) => {
  return (state = initialState, action) => {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    } else {
      return state;
    }
  };
};