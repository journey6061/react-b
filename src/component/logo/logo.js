import React from 'react';
import classeslogo from './logo.module.css';
import logoDir from './burger-logo.png';
//import classes from './layout.module.css';


const logo =(props)=>{
    return(
        <div className={classeslogo.Logo} style={{textAlign:props.tAlign}}>
            <img src={logoDir} alt='logo'/>
        </div>
    )

}

export default logo;