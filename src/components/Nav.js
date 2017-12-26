import React from 'react';

const Nav = props => {
  return (
    <div>
      <p>{props.userName}</p>
      <button onClick={props.signOut}>Sign out</button>
    </div>
  );
};

export default Nav;
