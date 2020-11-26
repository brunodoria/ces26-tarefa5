import React from 'react';

// componente para tratar do formulario de submissao
class MyForm extends React.Component {
  //propriedades da classe
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: null,
      errormessage: '',
      errorstatus:'',
    };
  }
  // handler para as validacoes desejadas
  // defini tambem as mensagens a serem exibidas
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    let err = '';
    if (nam === "age") {
      if (val !== "" && !Number(val)) { // metodo para verificar se a entrada e um numero
        err = <strong>A idade deve ser um número</strong>;
        this.setState({errorstatus: true});
      } else {
        if (val<=18) { // checagem da idade minima
          err = <strong>Sua idade deve ser maior que 18 anos</strong>;
          this.setState({errorstatus: true});
        }
        else {
          this.setState({errorstatus: false});
        }
      }
    }
    this.setState({errormessage: err});
    this.setState({[nam]: val});
  }
  // definir o funcionamento da submissao dos dados e o relacionamento com o backend
  onSubmit = async (e) => {
    e.preventDefault();
        if(!this.state.errorstatus)
        {
            try {
            // campos a serem obtidos como input do usuario
            const body =
            {
                name: this.state.name,
                age: this.state.age,
            }
            // referencia a rota especificada no backend
            await fetch("http://localhost:3010/form", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            } catch (err) {
            console.error(err.message);
            }
      }
  };
  // html a ser renderizado pelo browser com o formulario
  render() {
    return (
      <form onSubmit={this.onSubmit}> // definir a funcao de submissao dos dados
      <p>Insira seu nome:</p>
      <input
        type='text'
        name='name'
        onChange={this.myChangeHandler} // adicionar verificacao dos dados
      />
      <p>Insira sua idade:</p>
      <input
        type='text'
        name='age'
        onChange={this.myChangeHandler} // adicionar verificacao dos dados
      />
      <div>{this.state.errormessage}</div> // espaco para exibicao das mensagens de erro geradas pelo
      <input type='submit' value='Enviar'/>
      </form>
    );
  }
}

export default MyForm;
