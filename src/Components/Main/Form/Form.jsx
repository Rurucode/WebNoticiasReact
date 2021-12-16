import React, { Component } from "react";
import { Navigate } from "react-router-dom";

class Form extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       noticia: [{}],
       redirect: false
    }
  }
    
  handleSubmit = (event) => {
    event.preventDefault();
    const section = event.target.section.value
    const title = event.target.title.value
    const abstrac = event.target.abstrac.value
    const multimedia = event.target.multimedia.value
    const url = event.target.url.value
    const news = {section, title, abstrac, multimedia, url}
    this.props.submit(news)
    this.setState({ redirect: true });

    // <Redirect to="/" />

  }


  render() {
    const { redirect } = this.state;

     if (redirect === true) {
       return <Navigate to='/ListNews'/>;
     }
    return <div>
      <p>Estas en Form</p>

      <form onSubmit={this.handleSubmit}>
        <label htmlFor="section">Introduce la seccion.</label><br/>
        <input type="text" id="section" name="section" required="required"/><br />

        <label htmlFor="title">Introduce el titulo de la noticia.</label><br/>
        <input type="text" id="title" name="title" required="required"/><br />

        <label htmlFor="abstrac">Introduce una breve descripcion.</label><br/>
        <input type="text" id="abstrac" name="abstrac" required="required"/><br />

        <label htmlFor="multimedia">Introduce la url de la imagen de la noticia</label><br/>
        <input type="text" id="multimedia" name="multimedia" required="required"/><br />
        
        <label htmlFor="url">Introduce la url de la noticia.</label><br/>
        <input type="text" id="url" name="url" required="required"/><br />


        <input type="submit" value="Añadir noticia"/><br/>
      </form> 

      </div>;
  }
}

export default Form;
