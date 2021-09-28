import React from 'react'
import mobile2 from "../assets/mobile2.jpg"
function Home() {
    return (
        <div className="homeSection">
            <div className="leftHome">
                <h1 id="title">
                    Botonomics
                </h1>
                <p className="para">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti omnis corrupti soluta. Et soluta quidem voluptates voluptate saepe, assumenda repellat?Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis accusantium praesentium natus corrupti porro laudantium, fugiat delectus error similique fugit.
                </p>
                <input type="text" placeholder="type your email here" />
                <button className="btn">
                    Notify Me
                </button>
            </div>
            <div className="rightHome">
                <img src={mobile2} alt="mobile" />
            </div>
        </div>
    )
}

export default Home
