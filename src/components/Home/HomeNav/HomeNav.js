import React, {Component} from 'react';
import classes from './HomeNav.css';
import { UserAvatar16, Meter16, ShareKnowledge16, Forum16, Recommend16, ChevronUp16 } from '@carbon/icons-react';
import HomeNavLinks from '../../Navigation/HomeNavLinks/HomeNavLinks';

class HomeNav extends Component {
  render() {
    return (
        <div className={classes.HomeNav}>
            <span className={classes.HomePageName}>Home</span>

            <nav className={classes.HomeNavLinks}>
                
                <div className={classes.ActiveHomeNavLink}> 
                    <Meter16 style={{marginRight: '16px'}} /> Dashboard
                </div>

                <div className={classes.LinkWithSubLinks}> 
                    <div>
                        <ShareKnowledge16 style={{marginRight: '16px'}} /> Sessions 
                    </div>
                    <ChevronUp16 />
                </div>

                <HomeNavLinks number='2' type={true}>
                    <UserAvatar16 style={{marginRight: '16px'}} /> New sessions
                </HomeNavLinks>

                <HomeNavLinks number='4'>
                    <Recommend16 style={{marginRight: '16px'}} /> Upcoming sessions
                </HomeNavLinks>

                <HomeNavLinks number='8'>
                    <Forum16 style={{marginRight: '16px'}} /> Past sessions
                </HomeNavLinks>

            </nav>
        </div>
    )
  }
}

export default HomeNav;