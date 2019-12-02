import React, { Component } from 'react';
import Aux from '../../hoc/aux';
import classes from './layout.module.css';
import Toolbar from '../nav/toolbar/toolbar';
import Drawbar from '../nav/drawbar/drawbar';
//import Toolbar from './toolbar/toolbar';

class layout extends Component{
state={
    drawbardis:false,
}

disdraw=()=>{
    var barshow=this.state.drawbardis;
    this.setState({drawbardis:!barshow})
}

render(){
//const layout =(props)=>(
    return(
    <>
    <Drawbar drawbardis={this.state.drawbardis} disdraw={this.disdraw}/>
    <Toolbar drawshow={this.disdraw}/>
    <div>menu, sidedraw, backdrop</div>
    <main className={classes.main}>
        {this.props.children}
    </main>
    </>
    )
}

}

export default layout;