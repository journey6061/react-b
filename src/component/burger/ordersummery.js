import React from 'react';

const ordersummery =(props)=>{
    let summery=Object.keys(props.ingra)
    .map((cc)=>{
        return(<li key={cc}>{cc} : {props.ingra[cc]}</li>)
    }
    )

    return(
        <div>
            <p>your order:</p>
            <ul>
                {summery}
            </ul>
        </div>
    )
}

export default ordersummery;