import React, { useState } from 'react'
import { useCoutner } from '../../hooks/useCoutner';
import '../2-useEffect/effects.css';
import {Small} from './Small'


export const Memorize = () => {

    const {counter, increment} = useCoutner(10);

    const [show, setshow] = useState(true);

    return (
        <div>
            <h1>MEMORIZE</h1>
            <h2>Counter: <Small value={counter}/></h2>
            <hr/>

            <button
                 className="btn btn-primary"  
                 onClick={increment} 
            >
                MASUNO
            </button>
            <button
                 className="btn btn-outline-primary ml-3"  
                 onClick={() => {
                     setshow(!show)
                 }} 
            >
                Show/HIDE - {JSON.stringify(show)}
            </button>
        </div>
    )
}
