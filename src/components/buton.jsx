import React from 'react'

export default class Buton extends React.Component{
 constructor(){
   super()
   this.calcular=this.fcalc.bind(this)
 }
  fcalc=()=>{
    const r=this.props.p/(this.props.a*this.props.a)
    this.props.setR(r)
  }
  render(){
   return(
    <div>
      <button onClick={()=>this.calcular()}>Calcular</button>
    </div>
  )
}
}