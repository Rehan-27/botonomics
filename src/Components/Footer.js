import React from 'react'

function Footer() {
    return (
        <div className="footer">
            <div className="footerLeft">
                <h2 className="footerHead">Botonomics</h2>
                <p className="footerPara">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia voluptate, esse unde harum, recusandae rerum atque doloremque quo minima tenetur placeat libero? Officia impedit odit adipisci delectus? Natus, illo. Iusto.</p>
            </div>
            <div className="footerMid">
                <ul>
                    <a href="/">Link 1</a>
                    <a href="/">Link 2</a>
                    <a href="/">Link 3</a>
                    <a href="/">Link 4</a>
                </ul>
            </div>
            <div className="footerRight">
                <h3 className="follow">Follow Us</h3>
                <div>
                    <a href="/"><img src="https://img.icons8.com/ios-filled/50/000000/facebook-new.png" alt=" tours site" /></a>
                    <a href="/"><img src="https://img.icons8.com/ios-filled/50/000000/instagram-new.png" alt=" tours site" /></a>
                    <a href="/"><img src="https://img.icons8.com/ios-filled/50/000000/youtube-play.png" alt=" tours site" /></a>
                    <a href="/"><img src="https://img.icons8.com/ios-filled/50/000000/google-logo.png" alt=" tours site" /></a>
                </div>
            </div>
        </div>
    )
}

export default Footer
