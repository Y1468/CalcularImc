import React from 'react'

export default class Peso extends React.Component{
  constructor(){
    super()
  }
  render(){
  return(
    <div>
    <label>Digite o peso</label>
        <input 
          type="number" 
          value={this.props.p}
          onChange={(e)=>{this.props.sp(e.target.value)}}
          />
    </div>
  )
}
}