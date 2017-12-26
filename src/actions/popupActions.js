import ActionTypes from '../constants/ActionTypes';

export const closePopup = () => ({ type: ActionTypes.POPUP_DISAPPEAR });

export const showPopup = info => {
  return {
    type: ActionTypes.POPUP_APPEAR,
    template: info.template,
    content: info.content,
    fnts: info.fnts
  };
};

export const popupOnClick = (
  fnt,
  action = 'POPUP_BTN_CLICK',
  whichBtn
) => dispatch => {
  if (fnt) {
    dispatch(closePopup());
    fnt(dispatch);
  } else {
    let pureFnt = {
      type: ActionTypes[action],
      whichBtn: whichBtn
    };
    dispatch(pureFnt);
  }
};

export const popupLinkOnClick = () => {
  return {
    type: ActionTypes.POPUP_LINK_CLICK
  };
};
