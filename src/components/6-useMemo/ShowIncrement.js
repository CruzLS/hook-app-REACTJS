import React from 'react'

export const ShowIncrement = React.memo(({increment}) => {


    console.log('´me genere amix');
    return (
        <button className="btn btn-primary"
                onClick={()=>{increment();}}>
            
            incrementar
        </button>
    )
}
)