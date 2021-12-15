import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/ListNews">Lista de Noticias</Link></li>
      <li><Link to="/Form">Formulario</Link></li>
    </ul>;
  }
}

export default Nav;
