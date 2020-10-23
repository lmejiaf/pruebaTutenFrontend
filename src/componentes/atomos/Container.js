import React from 'react'

export default function Container({children, style}) {
    return (
        <div className="bg-blue-500 w-full h-screen">
            <div className="container mx-auto py-4">
                {children}
            </div>
        </div>
    )
}