import React from 'react';
import SecondsCounter from './Components/SecondsCounter';

/* componente principal quien recibe las propiedades className digits con valor según valores posicionales creadas en el componente 
secondsCounter */

const App = (props) => {
    return (
        <>
            <SecondsCounter
                digitSix={props.digitSix}
                digitFive={props.digitFive}
                digitFour={props.digitFour}
                digitThree={props.digitThree}
                digitTwo={props.digitTwo}
                digitOne={props.digitOne}

            />
        </>
    )
}

export default App;



