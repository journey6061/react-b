import React,{Component} from 'react';
import PropType from 'prop-types'

class burgeringra extends Component{
    render(){
        let ingra=null;
        switch(this.props.type){
            case('test1'):
                ingra=<div>test1</div>
                break;
            case('custom1'):
                ingra=<div>custom1</div>
                break;
            case('custom2'):
                ingra=<div>custom2</div>
                break;
            case('custom3'):
                ingra=<div>custom3</div>
                break;
            case('test2'):
                ingra=<div>test2</div>
                break;
            
            default:
                ingra=null;

            
        }
        return ingra;
    }
}


burgeringra.propType={
    type:PropType.string.isRequired
}

export default burgeringra;