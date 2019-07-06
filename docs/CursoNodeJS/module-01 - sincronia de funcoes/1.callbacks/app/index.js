// function obterPessoa(id, callback) {
//   setTimeout(() => {
//     return callback(null, {
//       nome: 'Erick',
//       id: 2,
//     });
//   }, 500);
// }

// function obterEndereco(pessoaId, callback) {
//   setTimeout(() => {
//     return callback(null, {
//       endereco: 'Av paulista, 22',
//       id: 3,
//     });
//   });
// }

// function obterTelefone(pessoaId, callback) {
//   setTimeout(() => {
//     return callback(null, {
//       telefone: '11969803388',
//       id: 22,
//     });
// });
// }

// function ma1111in() {
//     obterPessoa(2, (error1, result1) => {
//     obterEndereco(result1.id, (error2, result2) => {
//       obterTelefone(result1.id, (error3, result3) => {
//         console.log(`
//          Nome: ${result1.nome},
//          Telefone: ${result3.telefone},
//          Endereco: ${result2.endereco}
//         `);
//       });
//     });
//   });
//   return "mandei isso!" ;
// };






function obterUsuario(callback) {
  console.error("rodou o obterUsuario2")
  console.log("rodou o obterUsuario2")
  setTimeout(function () {
    return callback(null, {
      id: 1,
      nome: "aladin",
      dataDeNascimento: new Date()
    })
  }, 1000);
}


function obterTelefone(idUsuario) {
  //setTimeout(function () {
  return {
    tellefone: "293283489234",
    ddd: 11
  }
  //}, 1000);
}


function obterEndereco(idUsuario) {

}

function resolverUsuario(erro, usuario) {
    console.log(usuario);
}


// const telefone = obterTelefone(usuario.id)
//const telefo1111ne = obterTelefone(usuario.nome)

// console.log("usuario", usuario)
// console.log("telefone", telefone)



function ma1111in() {
  var resposta;

  //altera so aqui
  resposta = obterUsuario(resolverUsuario);
  //altera so aqui
  
  resposta = JSON.stringify(resposta);
  return resposta
}

