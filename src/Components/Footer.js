import React, { Fragment } from 'react'
import "../CSS/Footer.css"

const Footer = () => {
  return (
    <Fragment>
        <section className="footer">
            <div className="footer-container">
                <div className="footer-row">
                    <div className="footer-column">
                        <div className="column-content">
                            <h2>Downtown</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, deserunt?</p>
                            <ul className="footer-link">
                            <li><a href="#"><i class='fa-brands fa-facebook-f'></i></a></li>
                            <li><a href="#"><i class='fa-brands fa-twitter'></i></a></li>
                            <li>  <a href="#"><i class='fa-brands fa-instagram'></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-column">
                        <div className="column-content">
                            <h2>Community</h2>
                            <ul>
                            <li><a href="#"> <span> <i class='fa-solid fa-arrow-right-long'></i> Search Properties </span></a></li>
                            <li><a href="#"><span> <i class='fa-solid fa-arrow-right-long'></i> For Agents </span></a></li>
                            <li><a href="#"> <span> <i class='fa-solid fa-arrow-right-long'></i> Reviews </span></a> </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-column">
                        <div className="column-content">
                            <h2>About Us</h2>
                            <ul>
                            <li><a href="#"> <span> <i class='fa-solid fa-arrow-right-long'></i> Our Story </span></a></li>
                            <li><a href="#"><span> <i class='fa-solid fa-arrow-right-long'></i> Meet The Team </span></a></li>
                            <li><a href="#"> <span> <i class='fa-solid fa-arrow-right-long'></i> Reviews </span></a> </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-column">
                        <div className="column-content">
                            <h2>Company</h2>
                            <ul>
                            <li><a href="#"> <span> <i class='fa-solid fa-arrow-right-long'></i> About Us </span></a></li>
                            <li><a href="#"><span> <i class='fa-solid fa-arrow-right-long'></i> Press </span></a></li>
                            <li><a href="#"> <span> <i class='fa-solid fa-arrow-right-long'></i> Contact </span></a> </li>
                            <li><a href="#"> <span> <i class='fa-solid fa-arrow-right-long'></i> Careers </span></a> </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-column">
                        <div className="column-content">
                            <h2>Have a Question?</h2>
                            <ul>
                            <li>
                                <span className="footer-icon"> <i className="fa-solid fa-location-dot"></i> </span>
                                <span className="text">Mahendergarh,Haryana,India</span>
                            </li>
                            <li>
                                <span className="footer-icon"> <i className="fa-solid fa-phone"></i> </span>
                                <span className="text">+91 8448220147</span>
                            </li>
                            <li>
                                <span className="footer-icon"> <i className="fa-solid fa-envelope"></i> </span>
                                <span className="text">jangrahoney2309@gmail.com</span>
                            </li>
                           
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-2">
                    <div className="footer-2-container">
                        <p>Copyright @2022 All rights reserved HANNY</p>
                    </div>
                </div>
            </div>
        </section>
    </Fragment>
  )
}

export default Footer