const saudacao = 'Olá'

function exec(){
    const saudacao = 'Olá da função'
    return saudacao
}

const cliente = {
    nome: 'Daniel',
    idade: '41',
    endereco: {
        logradouro: 'Rua tal',
        numero: 475
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)