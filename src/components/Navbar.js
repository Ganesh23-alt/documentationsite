import React from 'react'

const Navbar = (item) => {
    return (
        <>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <a href={item.url} className="navbar-brand my-6" style={{ color: 'rgb(59,54,140),fontWeight:900,fontSise:30,letterSpacing:2,margin:0' }}><h1>Pharmacy Docs</h1></a>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </>
    )
}

export default Navbar