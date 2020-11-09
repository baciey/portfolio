import React, { Component } from 'react'
import './css/projekty.css'
import DietaCud from './img/dietaCud.png'
import DietaCud2 from './img/dietaCud2.png'
import DbzMemory from './img/dbzMemory.png'
import DbzMemory2 from './img/dbzMemory2.png'
import ListaToDo from './img/listaToDo.png'
import ListaToDo2 from './img/listaToDo2.png'
import Hangman from './img/hangman.png'
import Hangman2 from './img/hangman2.png'
import burgerownia from './img/burgerownia.png'
import burgerownia2 from './img/burgerownia2.png'
import Monitor from './img/monitor.png'
import Image from './Image'
// import { LazyImage } from "react-lazy-images";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDatabase, faForward } from '@fortawesome/free-solid-svg-icons'
import { faReact, faJs, faHtml5, faCss3Alt, faPhp, faSass } from "@fortawesome/free-brands-svg-icons"



class Projekty extends Component {
  state = {
    nr: 0,
    imgLoaded: false,
  }

  react = {
    name: 'React',
    img: faReact,
    color: '#61DBFB'
  }
  js = {
    name: 'JavaScript',
    img: faJs,
    color: '#f0db4f',
  }
  html = {
    name: 'HTML',
    img: faHtml5,
    color: '#f06529',
  }
  css = {
    name: 'CSS',
    img: faCss3Alt,
    color: '#2965f1',
  }
  php = {
    name: 'PHP',
    img: faPhp,
    color: '#B0B3D6',
  }
  sql = {
    name: 'SQL',
    img: faDatabase,
    color: 'lightgrey',
  }
  sass = {
    name: 'Sass',
    img: faSass,
    color: '#CD6799',
  }

  projects = [
    {
      title: '1. Gra w pamięć - Dragon Ball ',
      img1: DbzMemory,
      img2: DbzMemory2,
      techs: [this.react, this.js, this.html, this.css],
      link: 'https://dbzmemory.000webhostapp.com/',
      gitLink: 'https://github.com/baciey/dbzMemoryGame',
    },
    {
      title: '2. Blog dietetyczny - Dieta Cud ',
      img1: DietaCud,
      img2: DietaCud2,
      techs: [this.js, this.html, this.css, this.php, this.sql],
      link: 'https://dietacud.000webhostapp.com/',
      gitLink: 'https://github.com/baciey/dietaCud',
    },
    {
      title: '3. Lista "to-do" ',
      img1: ListaToDo,
      img2: ListaToDo2,
      techs: [this.react, this.js, this.html, this.css, this.sass],
      link: 'https://baciey.github.io/toDoList/',
      gitLink: 'https://github.com/baciey/toDoList',
    },
    {
      title: '4. Gra w szubienicę ',
      img1: Hangman,
      img2: Hangman2,
      techs: [this.react, this.js, this.html, this.css, this.sass],
      link: 'https://baciey.github.io/hangman/',
      gitLink: 'https://github.com/baciey/hangman',
    },
    {
      title: '5. Restauracja - Burgerownia ',
      img1: burgerownia,
      img2: burgerownia2,
      techs: [this.react, this.js, this.html, this.css, this.sass],
      link: 'https://baciey.github.io/burgerownia/',
      gitLink: 'https://github.com/baciey/burgerownia',
    }
  ]
  projectChange = () => {
    if (this.state.nr === this.projects.length - 1) {
      this.setState({
        nr: 0,
      })
      return;
    }
    this.setState({
      nr: this.state.nr + 1
    })
  }
  imgLoaded = () => {
    this.setState({ imgLoaded: true })
  }
  render() {
    const { nr } = this.state
    const techs = this.projects[nr].techs.map(tech =>
      <div key={tech.name} className="tech">
        <div className="techsName">{tech.name}</div>
        <div><FontAwesomeIcon icon={tech.img}
          size="2x"
          color={tech.color} /></div>
      </div >
    )


    return (
      <div className="containerProjekty">
        <p>{this.projects[nr].title}</p>
        <div className="mainProjekty">
          <div className="monitor">
            <Image
              nr={nr}
              monitor={Monitor}
              projects={this.projects}
              imgLoaded={this.imgLoaded}
              isImgLoaded={this.state.imgLoaded}
            />
          </div>
        </div>
        <div className="techs">
          {techs}
        </div>
        <div className="links">
          <a href={this.projects[nr].link}
            target="blank">Zobacz online</a>
          <a href={this.projects[nr].gitLink}
            target="blank">Kod na github</a>

        </div>
        <div className="nextProject">
          <button
            onClick={this.projectChange}>
            Nastepny projekt <FontAwesomeIcon
              icon={faForward} size="lg" />
          </button>
        </div>
      </div>
    );
  }
}

export default Projekty;