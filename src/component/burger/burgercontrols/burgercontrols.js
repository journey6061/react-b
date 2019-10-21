import React from 'react';
import Burgercontrol from './burgercontrol/burgercontrol'

const ingrad=[
    {name: 'custom1', type: 'custom1'},
    {name: 'custom2', type: 'custom2'},
    {name: 'custom3', type: 'custom3'}
]

const burgercontrols =(props)=>(
    <div>
        <p>total price: {props.price}</p>
       {ingrad.map((ing)=>{
           return <Burgercontrol 
           key={ing.name} 
           name={ing.name}
           add={()=>props.addmethod(ing.type)}
           remove={()=>props.removemethod(ing.type)}
           />
       })}
    </div>
)

export default burgercontrols;