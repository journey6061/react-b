import React from 'react';

const burgercontrol =(props)=>{
    return(
        <div>
            <span>{props.name}</span>
            <span onClick={props.add}> more</span>
            <span onClick={props.remove}> less</span>
        </div>
    )

}

export default burgercontrol;