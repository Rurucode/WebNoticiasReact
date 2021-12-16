import React, { Component } from "react";

class Card extends Component {

  


  render() {
    return <div>
      <p>{this.props.data.section}</p>
      <p>{this.props.data.title}</p>
      <p>{this.props.data.abstrac}</p>
      <p>{this.props.data.multimedia}</p>
      <p>{this.props.data.url}</p>
    </div>;
  }
}

export default Card;

