import React from 'react'

const PrimeraApp = () => {
    const saludo = {
        nombre: "Jose",
        edad: 29
    }

    return (
        <><h1>{saludo.nombre}</h1>
            <p>Mi primera aplicacion</p></>

    );
}

export default PrimeraApp;