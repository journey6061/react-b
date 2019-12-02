import React, { Component } from 'react';
import Logo from '../../logo/logo';
import classes from './drawbar.module.css';
import Navitem from '../navitem/navitem';
import Backdrop from '../../UI/backdrop';

/* class drawbar extends Component{
    state={
        drawbardis:true,
    }
    
    disdraw=()=>{
        this.setState({drawbardis:false})
    }

    render(){
        return(
            <>
            <Backdrop show={this.state.drawbardis} hidden={this.disdraw}/>
            <div className={classes.Drawbar} style={{display:this.state.drawbardis?'block':'none'}}>
            <Logo tAlign='center'/>
            <nav className={classes.Navi}>
                <Navitem />
            </nav>
            </div>
            </>
        )
    }
} */

/* 
const drawbar =(props)=>{
    return(
        <>
        <Backdrop onCliock={}/>
        <div className={classes.Drawbar}>
        <Logo tAlign='center'/>
        <nav className={classes.Navi}>
            <Navitem />
        </nav>
        </div>
        </>
    )
} */

const drawbar =(props)=>{
    return(
        <>
        <Backdrop show={props.drawbardis} hidden={props.disdraw}/>
        <div className={classes.Drawbar} style={{display:props.drawbardis?'block':'none'}}>
        <Logo tAlign='center'/>
        <nav className={classes.Navi}>
            <Navitem />
        </nav>
        </div>
        </>
    )
}

export default drawbar;