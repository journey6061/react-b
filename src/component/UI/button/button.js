import React from 'react';
import classes from './button.module.css'

const button =(props)=>{

    return(
        <div 
        className={[classes.Button, classes[props.type]].join(' ')}
        onClick={props.clicked}
        >
            {props.children}
        </div>
    )

}

export default button;