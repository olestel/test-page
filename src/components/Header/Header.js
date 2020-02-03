import React, {Component} from 'react';
import classes from './Header.css';
import Logo from './Logo/Logo';
import ActionList from './ActionList/ActionList';

class Header extends Component {

  render() {
    return (
      <header className={classes.Header}>
        <Logo />
        <ActionList />
      </header>
    )
  }
}
  
export default Header;