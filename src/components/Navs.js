/* eslint-disable no-restricted-globals */
/* eslint-disable react/function-component-definition */
import React from 'react'

import { NavList ,LinkStyled} from './Navs.styled';


const Navs = () => {

    const LINKS=[
        {to:"/", text:"home"},
        {to:"/starred", text:"starred"}
    ]
    return (
        
        <div>
            <NavList>
                {LINKS.map((item)=><li key={item.to}><LinkStyled to={item.to} className={item.to===location.pathname?'active':''}>{item.text}</LinkStyled></li>)}
            </NavList>
        </div>
    )
}

export default Navs
