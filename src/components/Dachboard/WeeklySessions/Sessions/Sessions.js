import React from 'react';
import classes from './Sessions.css';
import { OverflowMenuHorizontal16, UserAvatar16, ArrowRight16 } from '@carbon/icons-react';

const Sessions = props => {
  const cls = [
    classes.JoinButton, 
    classes[props.type]
  ]
  
  return (
    <div className={classes.Sessions}>
      <div className={classes.HeaderBlock}>
          <div className={classes.UserImage}>
            <UserAvatar16 style={{fill: '#000000', width: '64px', height: '64px'}}/>
          </div>
          
          <div className={classes.NavIcon}>
            <OverflowMenuHorizontal16 style={{fill: '#000000', cursor: 'pointer'}}/>
          </div>
      </div>

      <div>
        <div className={classes.UserNameBlock}>
          <span className={classes.UserName}>{props.name}</span>
          {props.joinTime ?
              <div className={classes.JoinedNow}>Attedee has joined</div>
            :
              <div className={classes.JoinedNowT}>02:12:16:32</div>
          }
        </div>
        <span className={classes.UserSessionTime}>{props.session}</span>
        <div className={classes.LinksBlock}>
          <span>{props.firstLink}</span>
          <div className={classes.LinksDot}></div>
          <span>{props.secondLink}</span>
        </div>
      </div>

      <button className={cls.join(' ')}>
        {props.type === 'Active' ?
            'Join call'
          :
            'View sessions brief'
        }
        <ArrowRight16 style={{fill: props.type === 'Active' ? '#F4F4F4' : '#8A3FFC' }}/>
      </button>
    </div>
  )
}

export default Sessions;