import React  from 'react'

/* Creacíon de componente quien va a pasar props. */

const SecondsCounter = (props) => {
    {/*
    let seconds = [0]; si quito los corchetes solo cuenta segundos en la consola. Si lo dejo me genera un array segú tiempo indicado
    const interval = setInterval(() => {
        console.log("segundo", seconds);
        seconds++;
    }, 1000);
    */}
    {/*
    var numeros = [];
    for (var i = 0; i <= 9; i++) {
        numeros.push(i);
    }

    numeros = Array.from(numeros);
    numeros.forEach(function (element) {
        setInterval(function () {
            console.log("Elemento cada 3 segundos", element);
        }, element * 3000);
    });
    */}
    {/*
    let seconds = 0;
    const interval = setInterval(() => {
        console.log("segundo", seconds);
        seconds++;
    }, 1000);
    */}
    
    return (
        <>
            <div className='container principal d-flex justify-content-center bg-success'>
                <i className='fa-solid fa-clock fa-9x mt-5'></i>
                <div className='d-flex justify-content-center mx-5 seconds'>
                    <div className='digitSix'>{props.digitSix}</div>
                    <div className='digitFive'>{props.digitFive}</div>
                    <div className='digitFour'>{props.digitFour}</div>
                    <div className='digitThree'>{props.digitThree}</div>
                    <div className='digitTwo'>{props.digitTwo}</div>
                    <div className='digitOne'>{props.digitOne}</div>
                </div>
            </div>
        </>
    )
}

export default SecondsCounter



