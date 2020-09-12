import React, { useState } from 'react'
//import '../2-useEffect/effects.css';
import {MultipleCustomHooks} from '../3-examples/MultipleCustomHooks';

import './layout.css';

export const RealExampleRef = () => {

    const [show, setshow] = useState(false);
    console.log(show);

    return (
        <div>
            <h1>REAL REF</h1>
            <hr/>

           { show && <MultipleCustomHooks/>}

            <button 
                className="btn btn-primary mt-5"
                    onClick={() =>{
                        setshow(!show);
                    }
                }
            >
                SHOW/HIDE
            
            </button>
        </div>
    )
}
