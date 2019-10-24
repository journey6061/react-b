import React from 'react';
import classes from './backdrop.module.css';

const backdrop =(props)=>{
    return(
        <div className={classes.backdrop}
        style={{display:props.show?'block':'none'}}
        onClick={props.hidden}
        >

        </div>
    )
}

export default backdrop