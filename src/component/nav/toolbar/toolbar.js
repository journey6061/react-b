import React from 'react';
import classes from './toolbar.module.css';
import Logo from '../../logo/logo';
import Navitem from '../navitem/navitem'

const toolbar=()=>{
    return(
        <div className={classes.Toolbar}>
            <div className={classes.Menu}>
                menu
            </div>
            <div className={classes.Logo}>
                <Logo />
            </div>
            <div className={classes.Navitem}>
                <Navitem />
            </div>
        </div>
    )
}

export default toolbar;