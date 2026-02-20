import React, { useEffect } from 'react'


const HookExample = () => {
    useEffect(() => {
        console.log("Rendered")

        return () => {
            console.log("Unmounted")
        }
    }, [])
    return (
        <div>
            HookExample

        </div>
    )
}

export default HookExample;
