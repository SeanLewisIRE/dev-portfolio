import React from 'react'
import './About.css'
import portfolio_image from '../../media/portfolio_image.jpg'

const About = () => {
    return (
        <section id="about">
            <div className="container">
                <div className="main">
                    <img className="author-image" src={portfolio_image} alt="Sean Lewis, website creator" />
                    <p>Hi, I'm Seán — a web developer based in London, currently working with the good folks at <a href="https://www.threepipe.co.uk/" rel="noopener noreferrer" target="_blank">Threepipe</a>.
                        Welcome to my portfolio which showcases a few projects I've worked on over the previous few months. 
                        I am developing a diverse set of skills and I am always learning and improving. 
                        If you'd like to say hi, or think that I could help on something awesome you're working on, please <a href="#contact">  get in touch.</a>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About
