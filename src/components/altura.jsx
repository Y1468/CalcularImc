import React from 'react'

export default class Altura extends React.Component{
  constructor(){
    super()
  }
  render(){
  return(
    <div>
     <label>Digite a altura</label>
          <input 
           type="number" 
           value={this.props.a}
           onChange={(e)=>{this.props.sa(e.target.value)}}
          />
    </div>
    
  )
}
}