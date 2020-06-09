import React, { Component } from 'react'
import './css/app.css'
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faIdCard, faEnvelope, faPhone, faMapMarkerAlt, faUser } from '@fortawesome/free-solid-svg-icons'

import Home from './Home'
import Projekty from './Projekty'
import logo from './img/mountain.jpg'





class App extends Component {
  state = {
  }



  render() {
    const icons =
      <div className="smallIcons">
        <span><FontAwesomeIcon icon={faUser} size="lg" /> Maciek Baczyński</span>
        <span><FontAwesomeIcon icon={faEnvelope} size="lg" /> maciek.baczynski23@gmail.com</span>
        <span><FontAwesomeIcon icon={faPhone} size="lg" /> 885014104</span>
        <span><FontAwesomeIcon icon={faMapMarkerAlt} size="lg" /> Wrocław</span>
      </div>

    return (
      <Router basename={process.env.PUBLIC_URL + '/'}>
        <>
          <div className="container">
            <div className="pPrawy">
              <div className="bgc">
                <img src={logo} alt="" />
              </div>
              <Switch>
                <Route path="/" exact ><Home icons={icons} /></Route>
                <Route path="/projekty" ><Projekty /></Route>
              </Switch>
            </div>
            <div className="nav">
              <ul>
                <li> <NavLink to="/" exact><FontAwesomeIcon icon={faHome} size="lg" /></NavLink></li>
                <li> <NavLink to="/projekty">Projekty</NavLink></li>
              </ul>
              <div className="icons">
                <FontAwesomeIcon icon={faIdCard} size="8x" />
                {icons}
              </div>

            </div>
          </div>

        </>
      </Router>
    )
  }
}

export default App;

