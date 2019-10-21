import React,{Fragment} from 'react';
import Aux from '../../hoc/aux';
import classes from './layout.module.css';

const layout =(props)=>(
    <>
    <div>menu, sidedraw, backdrop</div>
    <main className={classes.main}>
        {props.children}
    </main>
    </>

)

export default layout;