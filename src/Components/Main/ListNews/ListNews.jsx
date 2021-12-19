import React, { Component } from "react";
import Card from "./Card/Card";
import './ListNews.css'

class ListNews extends Component {

  // printCards = () => {
  //   return this.state.tareas.map((tarea, i)=> <Tarea tarea={this.state.tareas[i]}  delete={()=> this.borrarTarea(i)} key={i}/>)
  // }
  pintarNews = () => {
    return this.props.pintar.map((a, i) => <Card delete={()=>this.props.delete(i)} data={a} key={i} />)

  }

  


  render() {
    return <article className="lista">
      <p className="welcome">Estás en ListNews</p>
      <>
        {this.pintarNews()}
        

      </>
      

      </article>;
  }
}

export default ListNews;
