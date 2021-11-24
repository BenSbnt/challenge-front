import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Equipage from './Equipage';
import './Equipagelist.css'
function Equipagelist() {
    const [equipages, setEquipages] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/")
            .then((res) => res.data)
            .then((data) => setEquipages(data))
    }, [])
    console.log({ equipages })
    return (
        <div className="equipage-list">
            <h2 className="equipage-title">Membres de l'équipage</h2>
            <div className="equipage-content">
                {equipages
                    .map((equipage) =>
                        <div className="equipage" key={equipage.id} >
                            <Equipage equipage={equipage} />
                        </div>
                    )}
            </div>
        </div>
    )
}

export default Equipagelist
