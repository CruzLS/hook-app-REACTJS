import React, { useMemo, useState } from 'react'
import { useCoutner } from '../../hooks/useCoutner';
import '../2-useEffect/effects.css';


export const MemoHook = () => {

    const {counter, increment} = useCoutner(5000);

    const [show, setshow] = useState(true);

    const procesoPesado = (iteraciones) => {
        for (let i = 0; i < iteraciones; i++) {
           console.log('ahi va');
            
        }

        return `${iteraciones} iteraciones realizadas`;

    }

    const memoProcesoPesado = useMemo(() => procesoPesado, [counter]);

    return (
        <div>
            <h1>MemoHook</h1>
    <h2>Counter: <small>{counter}</small></h2>
            <hr/>

            <p>{memoProcesoPesado}</p>

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
