import React, { Component } from "react";
import Card from "./Card/Card";

class ListNews extends Component {

  // printCards = () => {
  //   return this.state.tareas.map((tarea, i)=> <Tarea tarea={this.state.tareas[i]}  delete={()=> this.borrarTarea(i)} key={i}/>)
  // }
  pintarNews = () => {
    return this.props.pintar.map((a, i) => <Card data={a} key={i} />)

  }



  render() {
    return <article>
      <p>Estas en ListNews</p>
      <>
        {this.pintarNews()}
        

      </>
      

      </article>;
  }
}

export default ListNews;
