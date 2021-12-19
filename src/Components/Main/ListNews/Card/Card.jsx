import React, { Component } from "react";
import "./Card.css"




class Card extends Component {

  
  render() {
    return <div className="tarjeta">
      <p className="capitalize">{this.props.data.section}</p>
      <img src={this.props.data.multimedia} alt="Foto noticia" />
      <h3>{this.props.data.title}</h3>
      <p>{this.props.data.abstrac}</p>
      {/* <p>{this.props.data.url}</p> */}
      <button><a href={this.props.data.url}>Click para ir a la noticia.</a></button>
      
      <button onClick={this.props.delete}>Borrar Noticia</button>
    </div>;
  }
}

export default Card;

