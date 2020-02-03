import React from 'react';
import classes from './HomeNavLinks.css';

const HomeNavLinks = props => {
  return (
    <div
      className={classes.SubLinks}
    >
        <div>
            {props.children} 
        </div>

        {
            props.type 
            ?
                <div className={classes.New}>
                    <div className={classes.NewSession}>
                        New
                    </div>

                    <div className={classes.GreySircl}>
                        {props.number}
                    </div>
                </div>
            :
            <div className={classes.New}>
                <div>
                </div>

                <div className={classes.GreySircl}>
                    {props.number}
                </div>
            </div>
        }

    </div>
  )
}

export default HomeNavLinks;