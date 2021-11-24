import React, { useState } from 'react';
import './Form.css'

import axios from 'axios';

function Form() {
    const url = "http://localhost:8000/api/"
    const [equipage, setEquipage] = useState({
        firstname: "",
    })

    const createEquipage = e => {
        e.preventDefault();
        axios.post(url, {
            firstname: equipage.firstname
        })
        alert("Equipage ajouté.")
        window.location.reload();
    }

    function handleInputChange(e) {
        const newEquipage = { ...equipage }
        newEquipage[e.target.id] = e.target.value
        setEquipage(newEquipage)
    }

    return (
        <div className="form">
            <h2>Ajouter un(e) Argonaute</h2>
            <form className="" onSubmit={createEquipage}>
                <label className="name-label">Nom de L'argonaute : </label>
                <input required className="name-input" name="firstname" id="firstname" type="textarea" onChange={(e) => handleInputChange(e)} value={equipage.firstname} />
                <input className="btn" type="submit" value="Ajouter" />
            </form>
        </div>
    )
}

export default Form
