import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import "./style.css";
import SecondsCounter from './Components/SecondsCounter';



let i=0


const root= ReactDOM.createRoot(document.querySelector('#root'))
setInterval(() => { 

    let unidad= Math.floor((i / 1) % 10)
    let decena= Math.floor((i / 10) % 10)
    let centena= Math.floor((i / 100) % 10)
    let unidadMil= Math.floor((i / 1000) % 10)
    let decenaMil= Math.floor((i / 10000) % 10)

    root.render(<SecondsCounter digitOne={unidad} 
                                digitTwo={decena} 
                                digitThree={centena} 
                                digitFour={unidadMil} 
                                digitFive={decenaMil}/>)
                                i++
                            
}, 1000);
                               
                            
                            
                            
                            

                            
