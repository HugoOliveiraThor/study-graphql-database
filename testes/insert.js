const db = require('../config/db')

// const novoPerfil = {
//   nome: 'visitante',
//   rotulo:'Visitante'
// }

// db('perfis').insert(novoPerfil)
// .then(result => console.log(result))
// .catch(err => console.log(err.sqlMessage))
// .finally(() => db.destroy())

const perfilSu = {
  nome: 'root' + Math.random(),
  rotulo: 'Super Usuário'
}

db.insert(perfilSu).into('perfis')
.then(result => console.log(result))
.catch(err => console.log(err.sqlMessage))
.finally(() => db.destroy())
