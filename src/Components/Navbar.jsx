import React from 'react'

const Navbar = ({ setPage }) => {
    return (
        <div>
            <button onClick={() => setPage('planets')}>Planet Page</button>
            <button onClick={() => setPage('people')}>People Page</button>
        </div>
    )
}

export default Navbar