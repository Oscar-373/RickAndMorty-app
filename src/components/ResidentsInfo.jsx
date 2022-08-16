import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';

const ResidentsInfo = ({resident, id}) => {

    const [ character, setCharacter ] = useState({})
    //const [ status, setStatus ]= useState("")

    useEffect(() => {
        axios.get(resident)
        .then(res => setCharacter(res.data))
    }, [resident])

    console.log(character)

    return (
        <li key={id} className="card-residents">
            <img src={character.image} alt="" />
                <div className='info-resident'>
                    <h4>{character.name}</h4>
                    <div className='status-color'>
                        <div className= {`${character.status}`}></div>
                        <h4>{character.status}-{character.species}</h4> 
                    </div>
                    <p>origin</p>
                    <h4>{character.origin?.name}</h4>
                    <p>episodes where appear</p>
                    <h4>{character.episode?.length}</h4>
                </div>

        </li>
    );
};

export default ResidentsInfo;