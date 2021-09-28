import React from 'react'
import map from '../assets/map.jpg'
function Contact() {
    return (
        <div className="contact">
            <h1 className="header">Conact Us</h1>
            <div className="contactContent">
                <div className="map">
                    <img src={map} alt="" />
                </div>
                <div className="form">
                    <div className="formInput">
                        <input type="text" placeholder="Name" />
                        <input type="text" placeholder="Email" />
                    </div>
                    <textarea name="textarea" id="textarea" cols="60" rows="5"></textarea>
                    <input type="checkbox" name="check" id="checkbox" /><span>I Agree</span>
                    <button id="formBtn">Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Contact
