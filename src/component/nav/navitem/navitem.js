import React from 'react';
import Navitems from './navirems/navitems';
import classes from './navitem.module.css'

const navitem =()=>{
    return(
        <div>
            <ul className={classes.Navitem}>
                <Navitems link='/' active>item1</Navitems>
                <Navitems link='/'>item2</Navitems>
            </ul>
        </div>
    )
}

export default navitem;