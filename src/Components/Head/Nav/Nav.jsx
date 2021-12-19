import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Nav.css'


class Nav extends Component {
  render() {
    return <ul>
      <li><Link to="/"><p>Home</p></Link></li>
      <li><Link to="/ListNews"><p>Lista de Noticias</p></Link></li>
      <li><Link to="/Form"><p>Formulario</p></Link></li>
    </ul>;
  }
}

export default Nav;
