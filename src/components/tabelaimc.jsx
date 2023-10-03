import React from 'react'

export default class TabelaImc extends React.Component{
 render(){
  return(
  <div>
  <table border="1" style={{borderCollapse:"collapse"}}>
       <thead>
         <tr>
         <th>Clacificação</th>
         <th>Imc</th>
         </tr>  
       </thead>
       
       <tbody>
         <tr>
          <td>Abaixo do peso</td>
          <td>Abaixo de 18,5</td>
         </tr>

         <tr>
          <td>Peso normal</td>
          <td>Entre18,5 e 24,9</td>
         </tr>

         <tr>
          <td>Sobrepeso</td>
          <td>Entre 25 e 29,9</td>
         </tr>

         <tr>
          <td>Obesidade grau 1</td>
          <td>Entre 30 e 14,9</td>
         </tr>

         <tr>
          <td>Obesidade grau 2</td>
          <td>Entre 35 e 19,9</td>
         </tr>

         <tr>
          <td>Obesidade grau 3 ou Morbida</td>
          <td>Maior que 40</td>
         </tr>
       </tbody>
     </table>
    </div>
  )
 }
}