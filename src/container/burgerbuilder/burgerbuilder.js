import React, {Component} from 'react';
//import classes from 'burgerbuilder.css'; 
import Burger from '../../component/burger/burger';
import Burgercontrols from '../../component/burger/burgercontrols/burgercontrols';
import Checkbutton from '../../component/burger/checkbutton';
import Price from '../../component/burger/price'

const price={
    custom1:0.4,
    custom2:1.5,
    custom3:0.7
}

class burgerbuilder extends Component {
    state={
        ingradience:{
            custom1:0,
            custom2:0,
            custom3:0,
        },
        baseprice:4,
        //checkout:false,
    }

    

    addingradient=(tt)=>{
        let chooseingra=this.state.ingradience[tt];
        let added=chooseingra+1;
        let updateingrad={...this.state.ingradience};
        updateingrad[tt]=added;

        let countprice=price[tt];
        let addedprice=this.state.baseprice;
        let newprice=countprice+addedprice;

        this.setState({ingradience:updateingrad, baseprice:newprice});
    }

    removeingradient=(kk)=>{
        const removeingrad=this.state.ingradience[kk];
        if(removeingrad>0){
        const removeamount=removeingrad-1;
        const newcustomised={...this.state.ingradience};
        newcustomised[kk]=removeamount;

        const baseprice=this.state.baseprice;
        const singleingrad=price[kk];
        const newamount=baseprice-singleingrad;

        this.setState({ingradience:newcustomised, baseprice:newamount});
            }
        }

   /*  getChildrenMsg = (result, msg) => {
        // console.log(result, msg)
        // 很奇怪这里的result就是子组件那bind的第一个参数this，msg是第二个参数
        this.setState({
            checkout: msg
        })
    } */

    render(){
        return(
            <>
{/*             <Price customprice={this.state.baseprice} />
 */}            
            
            <Burger ingra={this.state.ingradience}/>
            <Burgercontrols 
            addmethod={this.addingradient}
            removemethod={this.removeingradient}
            price={this.state.baseprice}
            />
{/*             <Checkbutton check={this.state.checkout}/>
 */}            </>
        );
    }
}

export default burgerbuilder;