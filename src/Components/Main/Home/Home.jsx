import React, { Component } from "react";
import {userContext} from '../../../Context/userContext';
import './Home.css'



class Home extends Component {

  static contextType = userContext

  constructor(props) {
    super(props)
    this.name = React.createRef();

    this.state = {
       name: ""
    }
  }
  
  

  handleSubmit = event => {
    event.preventDefault();
    const name = this.name.current.value // por referencia
    console.log(name);    
    this.setState({name})

    // Consumir contexto. Sólo necesito Login y Logout
    const {login} = this.context
    // Invocar a Login enviador por provider. Cambia contexto
    login(name);
    this.name.current.value = ""
  }

  
  
  
  render() {
    return <div>
      <p className="welcome">Bienvenido estás en la Home</p>
      <userContext.Consumer>
        {({user}) => user.name === "" ? <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Nombre:</label><br/>
          <input type="text" id="name" name="name" ref={this.name}/><br />
          <input type="submit" value="Log in"/>
        </form> :  "" }
      </userContext.Consumer>

      <img className="paper" src="https://www.clipartmax.com/png/full/244-2448102_newspaper-png-transparent-images-news-png.png" alt="Foto periodico" />

    
    </div>;
    
  }
}

export default Home;
