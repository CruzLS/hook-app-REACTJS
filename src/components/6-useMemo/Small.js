import React from 'react'

export const Small = React.memo( ({value}) => {

    console.log('LLAMADO DE EMERGENCIA :(');

    return (
        <small>{value}</small>

    )
})
