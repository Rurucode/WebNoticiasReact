import React, { Component } from "react";
import Form from "./Form/Form";
import Home from "./Home/Home";
import ListNews from "./ListNews/ListNews";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import './Main.css'


class Main extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       noticia: []
    }
  }

  async componentDidMount() {
    const response = await axios.get(`https://api.nytimes.com/svc/topstories/v2/climate.json?api-key=${process.env.REACT_APP_API_KEY}`)
    const data = response.data.results
    console.log(data)
console.log(data[0].multimedia[0].url);
    const arrayfetch = data.map((element, i)=> {
      try {
        return{ 
          section: element.section,
          title: element.title,
          abstrac: element.abstract,
          multimedia: element.multimedia!==null?element.multimedia[0].url:"NADA",
          url: element.url
        }
      } catch (error) {
        console.log(error)
      }
      }) 

    const recorte = arrayfetch.slice(0, 5)
    console.log(recorte)
    this.setState({noticia: [...this.state.noticia, ...recorte]})
  }


  
  deleteNew = (i) => {
    const listNews = this.state.noticia.filter((news, indice)=> indice !== i )
    console.log("--------------------" + listNews)
    this.setState({noticia: listNews})
  }

// this.setState([this.state.noticia])

  
  createNews = (input) => {
    this.setState({noticia: [...this.state.noticia, input]})
  }

  

  render() {
    return <div id="mainWeb">
      <Routes>
        <Route path="/" element={<Home/>} exact/>
        <Route path="/ListNews" element={<ListNews delete={this.deleteNew} pintar={this.state.noticia}/>}/>
        <Route path="/Form" element={<Form submit={this.createNews}/>}/>
      </Routes>

      

    </div>;
  }
}

export default Main;
