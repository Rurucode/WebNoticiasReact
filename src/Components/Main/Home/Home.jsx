import React, { Component } from "react";
import {userContext} from '../../../Context/userContext';

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
      <p>Bienvenido estas en la Home</p>
    
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Nombre:</label><br/>
        <input type="text" id="name" name="name" ref={this.name}/><br />
        <input type="submit" value="Log in"/>
      </form> 
    
    
    </div>;
    
  }
}

export default Home;
