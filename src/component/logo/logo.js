import React from 'react';
import classeslogo from './logo.module.css';
import logoDir from './burger-logo.png';
//import classes from './layout.module.css';


const logo =()=>{
    return(
        <div className={classeslogo.Logo}>
            <img src={logoDir} alt='logo'/>
        </div>
    )

}

export default logo;