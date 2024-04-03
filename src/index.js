import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import "./style.css";
import SecondsCounter from './Components/SecondsCounter';

var i = 0 /* valor en el que  inicia el SecondsCounter */

setInterval(() => { /* función que permite trabajar con intervalos de tiempo quien recibe como parámetro la función render y esta recibe
al componente SecondsCounter. Por lo tanto, el SecondsCounter será renderizado según cantidad de segundos */
    ReactDOM.createRoot(document.querySelector('#root')).render(<SecondsCounter digitOne={i}/>)
    i++
}, 1000);





