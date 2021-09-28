import React from 'react'
import mobile1 from "../assets/mobile1.jpg"

function Feature() {
    return (
        <div className="feature">
            <div className="header">
                <h1 className="heading">
                    Features
                </h1>
            </div>
            <div className="featureColumns">
                <div className="featureLeft">
                    <h2 className="featureTitle">Feature</h2>
                    <p className="featurePara">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur ea excepturi in asperiores molestiae aspernatur voluptatibus. Doloremque porro fugiat eligendi.</p>
                    <h2 className="featureTitle">Feature</h2>
                    <p className="featurePara">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur ea excepturi in asperiores molestiae aspernatur voluptatibus. Doloremque porro fugiat eligendi.</p>
                    <h2 className="featureTitle">Feature</h2>
                    <p className="featurePara">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur ea excepturi in asperiores molestiae aspernatur voluptatibus. Doloremque porro fugiat eligendi.</p>
                </div>
                <div className="featureMid">
                    <h2 className="featureTitle">Feature</h2>
                    <p className="featurePara">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur ea excepturi in asperiores molestiae aspernatur voluptatibus. Doloremque porro fugiat eligendi.</p>
                    <img src={mobile1} alt="mobile" />
                    <h2 className="featureTitle">Feature</h2>
                    <p className="featurePara">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur ea excepturi in asperiores molestiae aspernatur voluptatibus. Doloremque porro fugiat eligendi.</p>
                </div>
                <div className="featureRight">
                    <h2 className="featureTitle">Feature</h2>
                    <p className="featurePara">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur ea excepturi in asperiores molestiae aspernatur voluptatibus. Doloremque porro fugiat eligendi.</p>
                    <h2 className="featureTitle">Feature</h2>
                    <p className="featurePara">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur ea excepturi in asperiores molestiae aspernatur voluptatibus. Doloremque porro fugiat eligendi.</p>
                    <h2 className="featureTitle">Feature</h2>
                    <p className="featurePara">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur ea excepturi in asperiores molestiae aspernatur voluptatibus. Doloremque porro fugiat eligendi.</p>
                </div>
            </div>
        </div>
    )
}

export default Feature
