import React, { useLayoutEffect, useRef } from 'react'
//import '../2-useEffect/effects.css';
import { useFetch } from '../../hooks/useFetch';
import { useCoutner } from '../../hooks/useCoutner';
import './layout.css';


export const ReLayoutEffect = () => {

    const {counter, increment} = useCoutner(1);

    const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/characters/${counter}`);

    console.log(data);

    const {img, name, nickname, status} = !!data && data[0];

    console.log(img, name, nickname, status);

        const pTag = useRef();

    useLayoutEffect(() => {
        console.log(pTag.current.getBoundingClientRect());

    }, [name])


    return (
        <div>
            <h1>LAYOUT EFFECT</h1>
            <hr/>
            <blockquote className="blockquote text-center" ref ={pTag}>
                <p className="mb-0">Name: {name}</p>
             

            </blockquote>

         
            <button className="btn btn-primary" onClick={increment}>Next Character</button>


          
        </div>

      
    )
}
