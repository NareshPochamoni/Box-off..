/* eslint-disable react/function-component-definition */
import React from 'react'
import { Link } from 'react-router-dom';


const Navs = () => {

    const LINKS=[
        {to:"/", text:"home"},
        {to:"/starred", text:"starred"}
    ]
    return (
        
        <div>
            <ul>
                {LINKS.map((item)=><li key={item.to}><Link to={item.to}>{item.text}</Link></li>)}
            </ul>
        </div>
    )
}

export default Navs
