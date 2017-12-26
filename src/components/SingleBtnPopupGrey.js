import React from 'react';

const SingleBtnPopupGrey = ({
  title,
  message,
  link,
  linkMessage,
  btns,
  leftFnt
}) => (
  <div className="c-popup--overlay">
    <div className="c-popup bkgd--grey">
      <div className="c-popup__info">
        <h4 className="c-popup__info--title title--white">
          {title.map((oneTitle, i) => {
            return (
              <div key={'popup-' + i}>
                {oneTitle} <br />
              </div>
            );
          })}
        </h4>
        <p className="c-popup__info--paragraph text--white">{message}</p>
        <p className="c-popup__info--link text--white" onClick={link}>
          {linkMessage}
        </p>
      </div>
      <div className="c-popup__btns">
        <div className="c-popup__btn c-popup__btn--oneGrey" onClick={leftFnt}>
          {btns[0]}
        </div>
      </div>
    </div>
  </div>
);

export default SingleBtnPopupGrey;
