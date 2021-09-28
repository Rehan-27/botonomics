import React from 'react'
import user from '../assets/user.png'

function About() {
    return (
        <div className="about">
            <h1 className="header">About Us</h1>
            <div className="aboutPara">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas unde dolor rem aut? Necessitatibus, distinctio, voluptas quidem, ipsum pariatur dicta perferendis voluptate repudiandae a numquam eum sint temporibus ut corrupti tenetur impedit est incidunt maiores nemo corporis repellendus non ea? Officiis accusamus assumenda ipsum cumque rem fugiat temporibus reprehenderit deleniti? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere voluptatibus doloribus veniam voluptas numquam velit perspiciatis, quis neque dolorem explicabo, porro possimus repudiandae corrupti obcaecati natus recusandae non consectetur</p>
            </div>
            <div className="circleSection">
                <div>
                    <div className="circles"><img src={user} alt="user" /></div>
                    <p>Our Clients</p>
                </div>
                <div>
                    <div className="circles"><img src={user} alt="user" /></div>
                    <p>Our Clients</p>
                </div>
                <div>
                    <div className="circles"><img src={user} alt="user" /></div>
                    <p>Our Clients</p>
                </div>

            </div>
        </div>
    )
}

export default About
