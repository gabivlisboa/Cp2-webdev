
// Nome
let nome = prompt("Digite seu nome")

while (nome.length <= 3) {
    nome = prompt("Nome inválido. Digite novamente:")
}

// Idade
let idade = Number(prompt("Digite sua idade"))

while (idade < 0 || idade > 150 || isNaN(idade)) {
    idade = Number(prompt("Idade inválida. Digite novamente:"))
}

// Salário
let salario = Number(prompt("Digite seu salário"))

while (salario <= 0 || isNaN(salario)) {
    salario = Number(prompt("Salário inválido. Digite novamente:"))
}

// Gênero
let genero = prompt("Digite seu gênero: f ou m").toLowerCase()

while (genero !== "f" && genero !== "m") {
    genero = prompt("Gênero inválido. Digite f ou m").toLowerCase()
}

// Estado civil
let estadoCivil = prompt("Estado civil: s, c, v ou d").toLowerCase()

while (
    estadoCivil !== "s" &&
    estadoCivil !== "c" &&
    estadoCivil !== "v" &&
    estadoCivil !== "d"
) {
    estadoCivil = prompt("Estado civil inválido").toLowerCase()
}

alert("Dados cadastrados com sucesso!")
