import React,{Fragment} from 'react';
import Aux from '../../hoc/aux';
import classes from './layout.module.css';
import Toolbar from '../nav/toolbar/toolbar'
//import Toolbar from './toolbar/toolbar';

const layout =(props)=>(
    <>
    <Toolbar />
    <div>menu, sidedraw, backdrop</div>
    <main className={classes.main}>
        {props.children}
    </main>
    </>

)

export default layout;