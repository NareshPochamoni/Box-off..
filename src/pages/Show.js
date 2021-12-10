/* eslint-disable react/function-component-definition */
import React,{useEffect,useState} from 'react';
import {useParams} from 'react-router-dom';
import { apiGet } from '../misc/apiGet';

const Show = () => {
    const {id}=useParams();
     const [show,setShow]=useState(null);
    useEffect(()=>{

        apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`).then(results=>{
                setShow(results);
        })
        

    },[id]);
    console.log('show',show);
    return (
        <div>
            This is Show me page
        </div>
    )
}

export default Show;
