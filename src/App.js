import React, { Component } from 'react';
import './App.css';
import MyForm from "./Components/MyForm"
import Table from "./Components/Table"

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      content: null,
    };
  }

  showTable = async e => {
   const response = await fetch('http://localhost:3010/formtable');
   const form = await response.json();

   var exibt = (
     <Table data={form}/>
   );

   this.setState({content: exibt})

  }

  render(){
    return (
      <div className="App">
        <MyForm />
        <br/> <br/> <br/>
        <button onClick={this.showTable}>Mostrar Tabela</button>
        {this.state.content}
      </div>
    );
  }
}

export default App;
