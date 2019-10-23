import React from 'react';

const checkbutton =(props)=>{
    return(
        <div>
            <button disabled={props.check}> 
                Check Out
            </button>
        </div>
    )
}

export default checkbutton;