/* eslint-disable react/function-component-definition */
import React from 'react'
import ShowCard from './ShowCard';
import IMG_NOT_FOUND from '../../images/not-found.png';

const ShowGrid = ({data}) => {
    return <div>
        {
            data.map(item=><div key={item.show.id}><ShowCard id={item.show.id} name={item.show.name} image={item.show.image?item.show.image.medium:IMG_NOT_FOUND} summary={item.show.summary}/></div>)
        }
    </div>
         
    
}

export default ShowGrid
