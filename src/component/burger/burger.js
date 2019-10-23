import React, { useState } from 'react';
import Burgeringra from './burgeringra/burgeringra';

const Burger=(props)=>{
    //const [check, setCheck]=useState(false);
    const [count, setCount] = useState(0);
    const [check, setCheck] = useState(true);
    let emptyinfo=null;
    const countingradience=Object.keys(props.ingra)
    .map(aa=>
        
         [...Array(props.ingra[aa])]
    .map((bb, index)=>{
            return <Burgeringra key={aa+index+bb} type={aa}/>;
        }
    ) 
    )
    /*把Array的三个数组合并*/
    .reduce((aa,sec)=>{
        return aa.concat(sec)
    })
    console.log(countingradience);
    if(countingradience.length===0){
        emptyinfo=<p>please input ingradient</p>
    }
    else{
        //props.parent.getChildrenMsg(this, true);
        //setCheck(check=false);
        //this.setState({check:false})
        //check=true;
        //() => {return setCheck(check=false)};
        setCheck({ check }=false);
    }
    /* {
        for(let i=0; i<props.ingra[aa];i++){
            customfood+=<Burgeringra key={aa+i} type={aa}/>;
        }
        
    } */

    /*数组方法
    let customfood=[];
    const countingradience=Object.keys(props.ingra);

    for (let j=0; j<countingradience.length; j++){
        for(let i=0; i<props.ingra[countingradience[j]];i++){
            customfood.push(<Burgeringra key={countingradience[j]+i} type={countingradience[j]}/>);

        }
    }
    console.log(customfood);
    */
    
    /* const toParent = (props) => {
    // console.log(this.props.parent.getChildrenMsg.bind(this, this.state.msg))
        props.parent.getChildrenMsg(this, this.state.msg)
    }  */
    
        
    return (
        <div>
        <Burgeringra type='test1'/>
        {/* <Burgeringra type={props.ingradience.custom1}/> 
        <Burgeringra type={props.ingradience.custom2}/> 
        <Burgeringra type={props.ingradience.custom3}/>  */}
        {/* 数组方法component
        {customfood} */}

        {countingradience}
        {emptyinfo}
        
        <Burgeringra type='test2'/>

        <button disabled={check}>testtttttt!</button>
        {/* <button disabled={check}>Check Out</button> */}
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count+1)}>
    Click me
  </button>
        </div>
    )
    /* (ingra,index)=>{
    ingra.map(

    )
} */
    
};

export default Burger;