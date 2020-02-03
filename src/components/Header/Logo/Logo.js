import React, {Component} from 'react';
import classes from './Logo.css';
import { Partnership20 } from '@carbon/icons-react';

class Logo extends Component {

  render() {
    return (
      <div className={classes.Logo}>
        <Partnership20 className={classes.Partnership}/>
        <span>Wenty</span>
      </div>
    )
  }
}
  
export default Logo;