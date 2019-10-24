import React from "react";
import classes from './modal.module.css';

const ui =(props)=>{
    return(
        <div className={classes.Modal}
            style={{transform:props.show?'translateX(0)':'translateX(-100vw)', 
            opacity:props.show?'1':'0'}}
        >
            test
            {props.children}

        </div>
    )
}

export default ui