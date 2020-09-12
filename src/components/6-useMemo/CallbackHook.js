import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement';
import '../2-useEffect/effects.css';

export const CallbackHook = () => {


    const [counter, setcounter] = useState(10);

    // const increment = () =>{
    //     setcounter(counter+1);
    // }


    const increment = useCallback( () => {
        setcounter(counter+1);
    }, [setcounter]);


    return (
        <div>
            <h1>useCallback Hook {counter}</h1>
            <hr/>

            <ShowIncrement increment={increment}/>

        </div>
    )
}
