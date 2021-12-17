import React, { Component } from "react";




class Card extends Component {

  
  render() {
    return <div>
      <p>{this.props.data.section}</p>
      <p>{this.props.data.title}</p>
      <p>{this.props.data.abstrac}</p>
      <img src={this.props.data.multimedia} alt="Foto noticia" />
      <p>{this.props.data.url}</p>
      <button onClick={this.props.delete}>Borrar Noticia</button>
    </div>;
  }
}

export default Card;

