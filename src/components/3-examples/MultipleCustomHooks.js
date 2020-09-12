import React from 'react'
import '../2-useEffect/effects.css';
import { useFetch } from '../../hooks/useFetch';
import { useCoutner } from '../../hooks/useCoutner';


export const MultipleCustomHooks = () => {

    const {counter, increment} = useCoutner(1);

    const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/characters/${counter}`);

    console.log(data);

    const {img, name, nickname, status} = !!data && data[0];

    console.log(img, name, nickname, status);

    return (
        <div>
            <h1>BREAKING BAD CHARACTERS</h1>
            <hr/>

            {
                loading
                ?
                    (
                        
                        <div className="alert alert-info text-center">
                            Loading ...
                        </div>

                    )
                :
                    (
                        <blockquote className="blockquote text-center">
                            <p className="mb-0">Name: {name}</p>
                            <p className="mb-0">Nickname: {nickname}</p>
                            <p className="mb-0">Dead or alive: {status}</p>
                            <img className="img" src={img}></img>

                        </blockquote>
                    )

            }

            <button className="btn btn-primary" onClick={increment}>Next Character</button>


          
        </div>

      
    )
}
