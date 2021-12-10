/* eslint-disable import/newline-after-import */
/* eslint-disable react/function-component-definition */
import React from 'react'
import ActorCard from './ActorCard'
import IMG_NOT_FOUND from '../../images/not-found.png';
import { FlexGrid } from '../styled';
const ActorGrid = ({data}) => {
    return (
        <FlexGrid>
            {
                data.map(item=><div key={item.person.id}><ActorCard name={item.person.name} 
                    gender={item.person.gender} country={item.person.country?item.person.country.name:null} 
                    birthday={item.person.birthday} deathday={item.person.deathday} image={item.person.image?item.person.image.medium:IMG_NOT_FOUND} />
                    </div>)
            }
        </FlexGrid>
    )
}

export default ActorGrid
