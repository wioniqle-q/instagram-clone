import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
    return (
        <Link to={"/"}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png"
                alt="instagram"
                width={120}
                height={50}
            />
        </Link>
    )
}

export default Logo