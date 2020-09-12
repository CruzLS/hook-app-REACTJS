import React, {useState} from 'react';
import {useCoutner} from '../../hooks/useCoutner'
import './counter.css';

export const CounterWithCustomHook = () => {

    const {state, increment, decrement, reset} = useCoutner();


    return (
        <>
            <h1>Counter with hook: {state}</h1>
            <hr/>

            <button onClick={()=>increment(3)} className="btn">+ 1</button>
            <button onClick={reset} className="btn">RESET COUNTER</button>
            <button onClick={()=>decrement(3)} className="btn">- 1</button>
        </>
    )
}
