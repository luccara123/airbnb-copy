import React from 'react';
import City from './City';

function Cities (props){
    const cities = props.cities.map((city, i) => {
        return(
            <div className='col s3'> 
                <City city={city} key={i} />
            </div>
        )
    })
    return cities;
}

export default Cities;