import React from 'react';
import classes from './NavLinks.css';

const NavLinks = props => {
    const cls = [
        classes.NavLinks,
        classes[props.type]
    ]

  return (
    <div
      className={cls.join(' ')}
    >
      {props.children}
    </div>
  )
}

export default NavLinks;
