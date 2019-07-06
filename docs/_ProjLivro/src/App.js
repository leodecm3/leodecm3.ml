import React, { Component } from 'react'


class App extends Component {

  // funcao remover caracter
  removeCharacter = index => {
    const { characters } = this.state

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      }),
    })
  };

  // estado inicial da app
  state = {
    characters: [
            {
              name: 'Charlie',
              job: 'Janitor',
            },
            {
              name: 'Mac',
              job: 'Bouncer',
            },
            {
              name: 'Dee',
              job: 'Aspring actress',
            },
            {
              name: 'Dennis',
              job: 'Bartender',
            },
            {
              name: 'Anna',
              job: 'Fireman',
            },
          ],
  };

  // comeca a renderizar
  render() {


    // const { characters } = this.state
    return (
      <div className="container">
        {/* <Table characterData={characters} removeCharacter={this.removeCharacter} /> */}
        <ProjGenerico />
      </div>
      
    )
  };

};






class ProjGenerico extends Component{
	constructor(props) {
		super(props);

		this.state = {texto : 'banana'};
	}
	render(){
		return (

      
		<MeuComponente propriedade1={this.state.texto}></MeuComponente>

		);
	}
}

class MeuComponente extends Component {
	render(){
		return (
		<div>
      <th>-------------</th>
			<th>{this.props.propriedade1}</th>
			<th>-------------</th>
		</div>
		);
	}
}






















// class Table extends Component {
//   constructor() {
//     super()
//     this.state = {tmp: 1};
//   }
//   render() {
//       const { characterData, removeCharacter } = this.props
//       return (
//           <table>
//               {/* titulo */}
//               <thead>
//                   <tr>
//                       <th>Name1</th>
//                       <th>Job</th>
//                       <th>botao</th>
//                   </tr>
//               </thead>
//               {/* body */}
//               <TableBody characterData={characterData} removeCharacter={removeCharacter} />       
//           </table>
//       )
//   }
// }
// const TableBody = props => {
//   const rows = props.characterData.map((row, index) => {
//       return (
//           <tr key={index}>
//               <td>{row.name}</td>
//               <td>{row.job}</td>
//               <td>
//                   <button onClick={() => props.removeCharacter(index)}>Delete</button>
//               </td>
//           </tr>
//       )
//   })
//   return <tbody>{rows}</tbody>
// }





export default App;