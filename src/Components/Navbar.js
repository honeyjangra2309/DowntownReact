import React, { Fragment,useState } from 'react'
import '../CSS/Navbar.css'

const Navbar = () => {
    const [showMenu, setshowMenu] = useState(false);
  return (
    <Fragment>
        <nav>
            <h1>Downtown <span>.</span></h1>
            <div className={showMenu? "menu mobile-menu": "menu"}>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/property">Properties</a></li>
                    <li><a href="/">FAQ</a></li>
                    <li><a href="/">Agents</a></li>
                </ul>
                <div className="btn"><a href="">Add Property</a></div>
            </div>
            <i className="fa-solid fa-bars" onClick={() => setshowMenu(!showMenu)}></i>
        </nav>
    </Fragment>
  )
}

export default Navbar