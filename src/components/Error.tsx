import React from 'react'

interface ErrorMassageProps{
    error : string
}

export function Error( { error } : ErrorMassageProps){
    return (
        <div>
            <p className="text-center text-red-600">{error}</p>
        </div>
    )
}