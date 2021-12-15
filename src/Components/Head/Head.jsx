import React, { Component } from "react";
import { userContext } from "../../Context/userContext";
import Nav from "./Nav/Nav";

class Head extends Component {
  render() {
    return <header>
        <h1>React News</h1>
        <h2>Tu informativo de actualidad.</h2>
        <Nav/>
        <userContext.Consumer>
                {({user,logout}) => user.name?
                    <>
                      <h3>Hola {user.name}</h3>
                      <button onClick={logout}>Logout</button>
                    </> 

                  :"" 
                }
          </userContext.Consumer>
      </header>
  }
}

export default Head;
