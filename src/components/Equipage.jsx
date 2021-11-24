import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Equipage.css'
function Equipage({ equipage }) {

    return (
        <div className="test">
            <span>{equipage.firstname}</span>
        </div>
    )
}


export default Equipage
