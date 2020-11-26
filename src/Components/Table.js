import React, { Component } from 'react';

// construtor do componente para a tabela a ser exibida
export default class Table extends React.Component {
 constructor(props){
 // setar propriedades
 super(props);
 this.getHeader = this.getHeader.bind(this);
 this.getRowsData = this.getRowsData.bind(this);
 this.getKeys = this.getKeys.bind(this);
 }
 // chaves do json
 getKeys = function(){
  return Object.keys(this.props.data[0]);
}
 // header das informacoes
 getHeader = function(){
 var keys = this.getKeys();
 return keys.map((key, index)=>{ // chamada para cada item
 return <th key={key}>{key.toUpperCase()}</th>
 })
 }
 // dados propriamente ditos, campos da tabela
 getRowsData = function(){
 var items = this.props.data;
 var keys = this.getKeys();
 return items.map((row, index)=>{ // chamada para cada item
 return <tr key={index}><RenderRow key={index} data={row} keys={keys}/></tr>
 })
 }
 // construcao do html a ser de fato renderizado pelo browser
 render() {
 return (
 <div>
 <table style={{marginLeft: 'auto', marginRight: 'auto'}}>
 <thead>
 <tr>{this.getHeader()}</tr>//invocar metodo dos headers
 </thead>
 <tbody>
 {this.getRowsData()} // invocar metodos dos campos de informacao
 </tbody>
 </table>
 </div>

 );
 }
}
// componente utilizado no metodo para obtencao do conteudo das colunas 
const RenderRow = (props) =>{
 return props.keys.map((key, index)=>{
 return <td key={props.data[key]}>{props.data[key]}</td>
 })
}
