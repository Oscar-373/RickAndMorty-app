import axios from 'axios';
import React, { useState, useEffect } from 'react';
import ResidentsInfo from './ResidentsInfo';


const Location = () => {

    const [ locationInfo, setLocationInfo ] = useState({})
    const [ id, setId ] =useState("")

    useEffect(() => {
        const random = Math.floor(Math.random() * 126 ) +1
        axios.get(`https://rickandmortyapi.com/api/location/${random}`)
        .then(res => setLocationInfo(res.data))
    }, [])

    const searchId = () => {
        axios.get(`https://rickandmortyapi.com/api/location/${id}`)
        .then(res => setLocationInfo(res.data))
    }



    //console.log(locationInfo)

    return (
        <div className='header-img'>
            <img src="https://i.pinimg.com/originals/6e/39/6a/6e396ac75293f741be7b7855ba4968e5.gif" alt="" />
                <div className='header-location'>
                    <h1>{locationInfo.name}</h1>
                    <div className='sub-header'>
                        <h2>Type: {locationInfo.type}</h2>
                        <h2>Dimension: {locationInfo.dimension}</h2>
                        <h2>Population: {locationInfo.residents?.length}</h2>
                    </div>
                    <div className='header-button'>
                        <input 
                        type="text"
                        placeholder='Type a location id'
                        onChange={e => setId(e.target.value)}
                        value={id}
                        />
                        <button onClick={searchId}>Search</button>
                    </div>
                </div>

                    <ul className='list-residents'>
                        {locationInfo.residents?.map(resident => (
                             <ResidentsInfo resident={resident} id={resident.id} /> 
                        ))}
                    </ul>
                
        </div>
    );
};

export default Location;