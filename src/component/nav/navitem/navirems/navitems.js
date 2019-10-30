import React from 'react';
import classes from './navitems.module.css';

const navitems =(props)=>{
    return(
        <li className={classes.Items}>
            <a href={props.link}
            className={props.active?classes.active:null}
            >
                {props.children}
            </a>
        </li>
        
    )
}

export default navitems;