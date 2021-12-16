import React, { Component } from "react";
import Form from "./Form/Form";
import Home from "./Home/Home";
import ListNews from "./ListNews/ListNews";
import { Routes, Route } from "react-router-dom";
import axios from "axios";


class Main extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       noticia: []
    }
  }

  async componentDidMount() {
    const response = await axios.get(`https://api.nytimes.com/svc/topstories/v2/science.json?api-key=${process.env.REACT_APP_API_KEY}`)
    const data = response.data.results
    console.log(data)

    const arrayfetch = data.map((element, i)=> {return{ 
      section: element.section,
      title: element.title,
      abstrac: element.abstrac,
      // multimedia: element.multimedia[0].url,
      url: element.url
    }}) 
    const recorte = arrayfetch.slice(0, 5)
    console.log(recorte)
    this.setState({noticia: [...this.state.noticia, ...recorte]})
  }


  
  

// this.setState([this.state.noticia])

  
  createNews = (input) => {
    this.setState({noticia: [...this.state.noticia, input]})
  }

  

  render() {
    return <div>
      <Routes>
        <Route path="/" element={<Home/>} exact/>
        <Route path="/ListNews" element={<ListNews pintar={this.state.noticia}/>}/>
        <Route path="/Form" element={<Form submit={this.createNews}/>}/>
      </Routes>

      

    </div>;
  }
}

export default Main;
