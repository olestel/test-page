import React, {Component} from 'react';
import classes from './Navigation.css';
import NavLinks from './NavLinks/NavLinks'
import { Home16, Calendar16, User16, Purchase16, Chat16, UserAvatar32 } from '@carbon/icons-react';

class Navigation extends Component {
  render() {
    return (
        <nav className={classes.Navigation}>
            <div>
                <NavLinks type='activeLink'>
                    <Home16 />
                </NavLinks>

                <NavLinks type='' >
                    <Calendar16 />
                </NavLinks>

                <NavLinks type='' >
                    <User16 />
                </NavLinks>

                <NavLinks type='' >
                    <Purchase16 />
                </NavLinks>
            </div>

            <div>
                <NavLinks type=''>
                    <Chat16 />
                </NavLinks>

                <NavLinks type='' >
                    <UserAvatar32 />
                </NavLinks>
            </div>
            
        </nav>
    )
  }
}

export default Navigation;