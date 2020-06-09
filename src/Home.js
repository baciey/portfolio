import React from 'react'
import './css/home.css'


const Home = (props) => {
    return (
        <>

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
