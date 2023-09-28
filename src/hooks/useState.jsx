import React, { useRef } from 'react'

function useState() {
    const emailRef = useRef();
    const passRef = useRef();

    function onSubmit(e) {
        e.preventDefault();
        console.log({
            email: emailRef.current.value,
            password: passRef.current.value
        })
    }
    return (
        <>
            <div align="center">
                <form onSubmit={onSubmit}>
                    <input type="email" placeholder="email" ref={emailRef} />
                    <br />
                    <input type="password" placeholder="password" ref={passRef} />
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}

export default useState
