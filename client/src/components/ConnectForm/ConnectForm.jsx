import React from 'react'

function ConnectForm() {
    return (
        <div>
            <h1 className=' text-[50px] font-slab '>Contact Us</h1>
            <form className=' h-[400px] m-auto'>
                <input className=' border-2 w-[400px] mb-5 p-2' type="text" placeholder='Name'/><br/>
                <input className=' border-2 w-[400px] mb-5 p-2' type="text" placeholder='Email'/><br/>
                <textarea className=' border-2 w-[400px] h-[150px] p-2' placeholder='Message...'></textarea>
            </form>
        </div>
    )
}

export default ConnectForm
