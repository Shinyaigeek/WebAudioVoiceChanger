import React, { useEffect } from 'react'

export default function app() {
    useEffect(() => {
        const promise = navigator.mediaDevices.getUserMedia({
            audio: true,
            video: true
        })
    },[])
    return (
        <div>
            Hello
        </div>
    )
}
