import ActionTypes from '../constants/ActionTypes';
import { updateObject, createReducer } from '../utils/reducerUtils';
import PopupConfig from '../constants/PopupConfig';

const initialState = {
  popup: {
    condition: undefined,
    show: false,
    template: '',
    content: {
      title: '',
      message: '',
      buttons: []
    },
    fnts: []
  }
};

const popupFillOutContent = (state, action) => {
  let onePopupConfig = PopupConfig[action.condition];

  let template = action.template ? action.template : onePopupConfig.template;
  let content;
  if (action.content) {
    content = action.content;
  } else {
    let contentType = typeof onePopupConfig.content;
    switch (contentType) {
      case 'function':
        content = onePopupConfig.content(action.payload);
        break;
      case 'object':
        content = onePopupConfig.content;
        break;
      default:
    }
  }

  return updateObject(state, {
    popup: {
      show: true,
      condition: action.condition,
      template,
      content,
      fnts: action.fnts,
      actions: action.actions
    }
  });
};

const popupDisappear = (state, action) =>
  updateObject(state, {
    popup: initialState.popup
  });

export default createReducer(initialState, {
  [ActionTypes.POPUP_CONTENT]: popupFillOutContent,
  [ActionTypes.POPUP_DISAPPEAR]: popupDisappear
});
