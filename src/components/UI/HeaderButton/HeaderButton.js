import React from 'react';
import classes from './HeaderButton.css';

const HeaderButton = props => {
    const cls = [
        classes.HeaderButton,
        classes[props.type]
    ]

  return (
    <button
      className={cls.join(' ')}
    >
      {props.children}
    </button>
  )
}

export default HeaderButton;