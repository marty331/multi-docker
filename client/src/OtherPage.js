import React from 'react'
import { Link } from 'react-router-dom'

export const OtherPage = () => {
    return (
        <>
        I'm some other page.
        <Link to="/" >Go back home</Link>
        </>
    )
}

export default OtherPage