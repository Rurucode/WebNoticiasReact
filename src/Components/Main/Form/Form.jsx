import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import './Form.css'

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
    return <div className="formDiv">

      <form onSubmit={this.handleSubmit}>
        <img className="fondoForm" src="https://s7d9.scene7.com/is/image/NewellRubbermaid/DC29323_Papermate_Advanced_Desktop_medium-hero_2?fmt=jpeg" alt="Fondo" />
        <label htmlFor="section"><p>Introduce la sección.</p></label><br/>
        <input type="text" id="section" name="section" required="required"/><br />

        <label htmlFor="title"><p>Introduce el título de la noticia.</p></label><br/>
        <input type="text" id="title" name="title" required="required"/><br />

        <label htmlFor="abstrac"><p>Introduce una breve descripción.</p></label><br/>
        <input type="text" id="abstrac" name="abstrac" required="required"/><br />

        <label htmlFor="multimedia"><p>Introduce la url de la imagen de la noticia</p></label><br/>
        <input type="text" id="multimedia" name="multimedia" required="required"/><br />
        
        <label htmlFor="url"><p>Introduce la url de la noticia.</p></label><br/>
        <input type="text" id="url" name="url" required="required"/><br />


        <input className="submit" type="submit" value="Añadir noticia"/><br/>
      </form> 

      </div>;
  }
}

export default Form;
