const pessoa = {
    nome: 'Daniel',
    idade: '41',
    endereco: {
        logradouro: 'Rua tal',
        numero: 475
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i} = pessoa
console.log(n, i)

const { sobrenome, faculdade = true} = pessoa
console.log(sobrenome, faculdade )

const { endereco } = pessoa
console.log(endereco)

const { endereco: { logradouro, numero, cep} } = pessoa
console.log(logradouro, numero, cep)
