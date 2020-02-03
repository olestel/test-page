import React, {Component} from 'react';
import classes from './Layout.css';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import HomeNav from '../../components/Home/HomeNav/HomeNav';
import Dachboard from '../../components/Dachboard/Dachboard';

class Layout extends Component {
  render() {
    return (
      <div className={classes.Layout}>
        <Header />

        <div className={classes.contentBlock}>
          <Navigation/>
          <HomeNav />
          <Dachboard />
        </div>
        
      </div>
    )
  }
}

export default Layout;