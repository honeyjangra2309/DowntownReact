import React, { Fragment } from 'react'
import "../CSS/Home.css"

const Home = () => {
  return (
    <Fragment>
        <section className="home">
            <div className="container">
                <h1>We construct <br /> dreams </h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque ullam quibusdam placeat sit provident!</p>
                <div className="link">
                    <a href="#" className="explore">Explore</a>
                    <a href="#" className="contact">Contact Us</a>
                </div>
            </div>
        </section>
    </Fragment>
  )
}

export default Home