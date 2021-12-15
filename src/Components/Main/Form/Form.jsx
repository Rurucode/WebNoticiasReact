import React, { Component } from "react";
import { Redirect } from "react-router-dom";


class Form extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       noticia: [{}]
    }
  }

  createNews = (input) => {
    this.setState({noticia: [...this.state.noticia, input]})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const source = event.target.source.value
    const author = event.target.author.value
    const title = event.target.title.value
    const description = event.target.description.value
    const url = event.target.url.value
    const imageUrl = event.target.imageUrl.value
    const news = {source, author, title, description, url, imageUrl}
    this.createNews(news)
    event.target.source.value = '';
    event.target.author.value = '';
    event.target.title.value = '';
    event.target.description.value = '';
    event.target.url.value = '';
    event.target.imageUrl.value = '';
    // <Redirect to="/" />

  }
  

  render() {
    return <div>
      <p>Estas en Form</p>

      <form onSubmit={this.handleSubmit}>
        <label htmlFor="source">Introduce la fuente.</label><br/>
        <input type="text" id="source" name="source" required="required"/><br />

        <label htmlFor="author">Introduce el Autor de la noticia.</label><br/>
        <input type="text" id="author" name="author" required="required"/><br />

        <label htmlFor="title">Introduce el titulo de la noticia.</label><br/>
        <input type="text" id="title" name="title" required="required"/><br />

        <label htmlFor="description">Introduce una breve descripcion.</label><br/>
        <input type="text" id="description" name="description" required="required"/><br />

        <label htmlFor="url">Introduce la url de la noticia.</label><br/>
        <input type="text" id="url" name="url" required="required"/><br />

        <label htmlFor="imageUrl">Introduce la url de la imagen de la noticia</label><br/>
        <input type="text" id="imageUrl" name="imageUrl" required="required"/><br />

        <input type="submit" value="Añadir noticia"/><br/>
      </form> 

      </div>;
  }
}

export default Form;
