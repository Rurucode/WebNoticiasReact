import React, { Component } from "react";
import Form from "./Form/Form";
import Home from "./Home/Home";
import ListNews from "./ListNews/ListNews";
import { Routes, Route } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: ""
    }
  }
  


  render() {
    return <div>
      <Routes>
        <Route path="/" element={<Home/>} exact/>
        <Route path="/ListNews" element={<ListNews/>}/>
        <Route path="/Form" element={<Form/>}/>
      </Routes>

      

    </div>;
  }
}

export default Main;
