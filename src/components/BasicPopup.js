import React from 'react';

const BasicPopup = ({ title, message, btns, leftFnt, rightFnt }) => (
  <div className="c-popup--overlay">
    <div className="c-popup bkgd--white">
      <div className="c-popup__info">
        <h4 className="c-popup__info--title title--grey">
          {title.map((oneTitle, i) => {
            return (
              <div key={'popup-' + i}>
                {oneTitle} <br />
              </div>
            );
          })}
        </h4>
        <p className="c-popup__info--paragraph text--grey">{message}</p>
        <p className="c-popup__info--link text--grey--hide" />
      </div>
      <div className="c-popup__btns">
        <div className="c-popup__btn c-popup__btn--left" onClick={leftFnt}>
          {btns[0]}
        </div>
        <div className="c-popup__btn c-popup__btn--right" onClick={rightFnt}>
          {btns[1]}
        </div>
      </div>
    </div>
  </div>
);

export default BasicPopup;
