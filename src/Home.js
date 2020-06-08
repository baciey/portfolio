import React from 'react'
import './css/home.css'
// import logo from './img/bgImage2.jpg'
import logo from './img/mountain.jpg'


const Home = (props) => {
    return (
        <>
            {/* <div className="bgc">
                <img src={logo} alt="" />
            </div> */}
            <div className="main">
                <div className="title">Maciek Baczyński
                      <span>JUNIOR FRONT-END DEVELOPER</span>
                </div>
            </div>
            <div className="icons">{props.icons}</div>
        </>
    )
}

export default Home;
