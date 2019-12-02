import React from 'react';
import classes from './toolbar.module.css';
import Logo from '../../logo/logo';
import Navitem from '../navitem/navitem';
//import Drawbar from '../drawbar/drawbar';

const toolbar=(props)=>{
    return(
        <div className={classes.Toolbar}>
            <div className={classes.Menu} onClick={props.drawshow}>
                menu
            </div>
            <div className={classes.Logo}>
                <Logo tAlign='center'/>
            </div>
            <div className={classes.Navitem}>
                <Navitem />
            </div>
        </div>
    )
}

export default toolbar;