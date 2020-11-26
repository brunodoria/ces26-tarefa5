import React, { Component } from 'react';
import './App.css';
// importar componentes necessarios para a aplicacao
import MyForm from "./Components/MyForm"
import Table from "./Components/Table"

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      content: null,
    };
  }
  // funcao para exibira a tabela com os dados
  // tem-se conexao com a definicao de comportamento no servidor
  // tem-se uso do componente criado para exibicao da tabela
  showTable = async e => {
   const response = await fetch('http://localhost:3010/formtable');
   const form = await response.json();

   var exibt = (
     <Table data={form}/> // usar conteudo obtido do server no componente criado para formato da tabela
   );

   this.setState({content: exibt})

  }
  // html relativo a pagina em si
  render(){
    return (
      <div className="App">
        <MyForm /> // utililzar o compoennte criado para o formulario
        <br/> <br/> <br/>
        <button onClick={this.showTable}>Mostrar Tabela</button> // opcao para exibir o conteudo ja existente no backend
        {this.state.content}
      </div>
    );
  }
}

export default App;
