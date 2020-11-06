import React from 'react';

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: null,
      errormessage: '',
      errorstatus:'',
    };
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    let err = '';
    if (nam === "age") {
      if (val !== "" && !Number(val)) {
        err = <strong>A idade deve ser um número</strong>;
        this.setState({errorstatus: true});
      } else {
        if (val<=18) {
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
  onSubmit = async (e) => {
    e.preventDefault();
        if(!this.state.errorstatus)
        {
            try {
            const body =
            {
                name: this.state.name,
                age: this.state.age,
            }

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

  render() {
    return (
      <form onSubmit={this.onSubmit}>
      <p>Insira seu nome:</p>
      <input
        type='text'
        name='name'
        onChange={this.myChangeHandler}
      />
      <p>Insira sua idade:</p>
      <input
        type='text'
        name='age'
        onChange={this.myChangeHandler}
      />
      <div>{this.state.errormessage}</div>
      <input type='submit' value='Enviar'/>
      </form>
    );
  }
}

export default MyForm;
