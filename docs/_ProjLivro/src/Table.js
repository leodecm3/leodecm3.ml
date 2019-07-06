import React, { Component } from 'react'





class Table extends Component {
    render() {
        const { characterData, removeCharacter } = this.props

        return (
            <table>
                {/* titulo */}
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>J1qqob</th>
                        <th>botao</th>
                    </tr>
                </thead>


                <TableBody characterData={characterData} removeCharacter={removeCharacter} />
                
            </table>
        )
    }
}



const TableBody = props => {
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                    <button onClick={() => props.removeCharacter(index)}>Delete</button>
                </td>
            </tr>
        )
    })

    return <tbody>{rows}</tbody>
}







export default Table