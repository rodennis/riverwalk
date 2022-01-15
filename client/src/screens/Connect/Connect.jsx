import React, { useLayoutEffect } from 'react'
import ConnectForm from '../../components/ConnectForm/ConnectForm';
import Map from '../../components/Map/Map'

function Connect() {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }); 

    return (
        <div className=" w-full h-screen bg-home-background bg-cover bg-center bg-fixed">
            <div className=' flex flex-col justify-center align-center absolute w-[100%] h-screen mt-[100vh]'>
            <ConnectForm />
            <Map />

            </div>
        </div>
    )
}

export default Connect
