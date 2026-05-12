
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

//Esse exemplo pede um número até o usuário digitar um valor válido.

function pedirNumero() {

    let numero

    do {
        numero = Number(prompt("Digite um número maior que 0"))
    } while (numero <= 0 || isNaN(numero))

    console.log(`Número válido: ${numero}`)
}

pedirNumero()

//Validar nome

function validarNome() {

    let nome

    do {
        nome = prompt("Digite seu nome")
    } while (nome.length <= 3)

    console.log(`Nome válido: ${nome}`)
}

validarNome()

//Exemplo com menu

function menu() {

    let opcao

    do {

        opcao = prompt(`
1 - Ver saldo
2 - Fazer pix
3 - Sair
`)

    } while (opcao !== "3")

    console.log("Programa encerrado")
}

menu()

// ======================================================


// EXERCÍCIO 1


// Faça um programa que


// receba o nome, idade e


// profissão da pessoa e


// escreva “Olá nome, você


// tem x anos e trabalha como


// xxxx!”


// ======================================================


const nome1 = prompt("Digite seu nome:")


const idade1 = prompt("Digite sua idade:")


const profissao1 = prompt("Digite sua profissão:")


alert(`Olá ${nome1}, você tem ${idade1} anos e trabalha como ${profissao1}!`)


// Explicação:


// O programa recebe os dados usando prompt()


// e exibe usando template string.



// ======================================================


// EXERCÍCIO 2


// Façam um programa que


// pergunte o nome, idade e


// curso do usuário e apresente


// em um alert a frase:


// “Olá, meu nome é xxxx, tenho


// xx anos e estudo xxxxx na


// FIAP.”


// ======================================================


const nome2 = prompt("Digite seu nome:")


const idade2 = prompt("Digite sua idade:")


const curso = prompt("Digite seu curso:")


alert(`Olá, meu nome é ${nome2}, tenho ${idade2} anos e estudo ${curso} na FIAP.`)


// Explicação:


// Template string usa crase (`)


// e ${} para inserir variáveis.



// ======================================================


// EXERCÍCIO 3


// Faça um algoritmo que


// converte uma distância de


// metros para centímetros.


// ======================================================


const metros = Number(prompt("Digite a distância em metros:"))


const centimetros = metros * 100


alert(`${metros} metros equivalem a ${centimetros} centímetros.`)


// Explicação:


// 1 metro = 100 centímetros.



// ======================================================


// EXERCÍCIO 4


// Faça um algoritmo que


// calcula o IMC de uma pessoa.


// ======================================================


const peso = Number(prompt("Digite seu peso:"))


const altura = Number(prompt("Digite sua altura:"))


const imc = peso / (altura ** 2)


alert(`Seu IMC é ${imc.toFixed(2)}`)


// Explicação:


// Fórmula do IMC:


// peso / altura².



// ======================================================


// EXERCÍCIO 5


// Faça um algoritmo que


// calcule o preço de um


// produto baseado no seu


// peso. Considere que a cada


// 100g o preço é R$5,00


// ======================================================


const pesoProduto = Number(prompt("Digite o peso do produto em gramas:"))


const preco = (pesoProduto / 100) * 5


alert(`Preço total: R$ ${preco.toFixed(2)}`)


// Explicação:


// Divide o peso por 100


// e multiplica por 5.



// ======================================================


// EXERCÍCIO 6


// Façam um programa que peça


// um número para o usuário,


// depois outro número e ao final,


// exiba em um alert a soma


// desses dois números.


// ======================================================


const numero1 = Number(prompt("Digite o primeiro número:"))


const numero2 = Number(prompt("Digite o segundo número:"))


alert(`Soma: ${numero1 + numero2}`)


// Explicação:


// Number() converte string em número.



// ======================================================


// EXERCÍCIO 7


// Faça um programa que receba


// o login e a senha do usuário:


// Usuário e senha corretos:


// 1234


// Exibir a mensagem: Login


// efetuado com sucesso!


// Qualquer outro


// Exibir a mensagem: Usuário ou


// senha incorretos


// ======================================================


const login = prompt("Digite o login:")


const senha = prompt("Digite a senha:")


if (login === "1234" && senha === "1234") {


   alert("Login efetuado com sucesso!")


} else {


   alert("Usuário ou senha incorretos")


}


// Explicação:


// && significa E.


// Ambos precisam estar corretos.



// ======================================================


// EXERCÍCIO 8


// Faça um programa que receba 3


// possibilidades de login e senha


// do usuário:


// Exibir a mensagem caso


// correto: Login efetuado com


// sucesso!


// Qualquer outro


// Exibir a mensagem: Usuário ou


// senha incorretos


// ======================================================


const usuario = prompt("Digite o usuário:")


const senhaUsuario = prompt("Digite a senha:")


if (


   (usuario === "ana" && senhaUsuario === "123") ||


   (usuario === "joao" && senhaUsuario === "456") ||


   (usuario === "maria" && senhaUsuario === "789")


) {


   alert("Login efetuado com sucesso!")


} else {


   alert("Usuário ou senha incorretos")


}


// Explicação:


// || significa OU.


// Qualquer combinação correta funciona.



// ======================================================


// EXERCÍCIO 9


// Receba 3 nomes e devolva-os


// em ordem alfabética,


// validando se o campo foi


// preenchido ou foi enviado


// vazio.


// ======================================================


const n1 = prompt("Digite o primeiro nome:")


const n2 = prompt("Digite o segundo nome:")


const n3 = prompt("Digite o terceiro nome:")


if (!n1 || !n2 || !n3) {


   alert("Todos os campos devem ser preenchidos.")


} else {


   const nomes = [n1, n2, n3]


   nomes.sort()


   alert(`Ordem alfabética:\n${nomes.join("\n")}`)


}


// Explicação:


// sort() organiza os nomes em ordem alfabética.



// ======================================================


// EXERCÍCIO 10


// Crie uma função que receba


// dois números e retorne o maior


// deles. Se forem iguais, retorne a


// mensagem ‘São iguais’


//


// Agora receba esses números via


// prompt


// ======================================================


function maiorNumero(a, b) {


   if (a > b) {


       return a


   } else if (b > a) {


       return b


   } else {


       return "São iguais"


   }


}


const numA = Number(prompt("Digite o primeiro número:"))


const numB = Number(prompt("Digite o segundo número:"))


alert(maiorNumero(numA, numB))


// Explicação:


// return devolve o valor da função.



// ======================================================


// EXERCÍCIO 11


// Faça uma função que receba


// um texto, limpe os espaços em


// branco do início e fim e retorna


// este texto maiúsculo.


// ======================================================


function formatarTexto(texto) {


   return texto.trim().toUpperCase()


}


const textoUsuario = prompt("Digite um texto:")


alert(formatarTexto(textoUsuario))


// Explicação:


// trim() remove espaços.


// toUpperCase() deixa maiúsculo.



// ======================================================


// EXERCÍCIO 12


// Faça uma função que receba


// um texto, verifique se possui a


// letra a.


// Se possuir, substitua todas as


// letras a por o. Senão devolva o


// texto sem alteração.


// Lembre-se: includes é CASE


// SENSITIVE.


// ======================================================


function trocarLetras(texto) {


   if (texto.toLowerCase().includes("a")) {


       return texto.replaceAll(/a/gi, "o")


   }


   return texto


}


const textoTroca = prompt("Digite um texto:")


alert(trocarLetras(textoTroca))


// Explicação:


// includes() verifica existência.


// replaceAll() substitui letras.



// ======================================================


// EXERCÍCIO 13


// Faça uma função que receba


// um número do usuário de 1 a 10,


// gere um número aleatório e


// compare os dois, retornando se


// o usuário acertou ou não o


// palpite.


// Valide se o que o usuário


// digitou é um número mesmo.


// ======================================================


function jogo() {


   const numeroUsuario = Number(prompt("Digite um número de 1 a 10:"))


   if (isNaN(numeroUsuario)) {


       alert("Digite um número válido.")


       return


   }


   const numeroAleatorio = Math.floor(Math.random() * 10) + 1


   if (numeroUsuario === numeroAleatorio) {


       alert("Você acertou!")


   } else {


       alert(`Errou! O número era ${numeroAleatorio}`)


   }


}


jogo()


// Explicação:


// Math.random() gera números aleatórios.



// ======================================================


// EXERCÍCIO 14


// Crie uma função:


// - Para receber o nome do


// usuário


// - Outra para receber a idade


// do usuário


// - Outra para montar a


// mensagem com os dois


// - Outra para exibir uma


// mensagem qualquer


// - Outra para iniciar o programa


// e chamar as outras funções


// ======================================================


function receberNome() {


   return prompt("Digite seu nome:")


}


function receberIdade() {


   return prompt("Digite sua idade:")


}


function montarMensagem(nome, idade) {


   return `Olá ${nome}, você tem ${idade} anos.`


}


function exibirMensagem(msg) {


   alert(msg)


}


function iniciarPrograma() {


   const nome = receberNome()


   const idade = receberIdade()


   const mensagem = montarMensagem(nome, idade)


   exibirMensagem(mensagem)


}


iniciarPrograma()


// Explicação:


// Cada função faz apenas uma tarefa.



// ======================================================


// EXERCÍCIO 15


// Escreva um programa em


// JavaScript que solicita ao


// usuário um número inteiro


// positivo e, em seguida, imprime


// uma contagem regressiva a


// partir desse número até 1.


// ======================================================


const inicio = Number(prompt("Digite um número positivo:"))


for (let i = inicio; i >= 1; i--) {


   console.log(i)


}


// Explicação:


// O loop vai diminuindo até chegar em 1.



// ======================================================


// EXERCÍCIO 16


// Faça um programa que leia e


// valide as seguintes informações:


// Nome: maior que 3 caracteres;


// Idade: entre 0 e 150;


// Salário: maior que zero;


// Gênero: 'f' ou 'm';


// Estado Civil: 's', 'c', 'v', 'd';


// ======================================================


let nomeValido = prompt("Digite o nome:")


while (nomeValido.length <= 3) {


   nomeValido = prompt("Nome inválido. Digite novamente:")


}


let idadeValida = Number(prompt("Digite a idade:"))


while (idadeValida < 0 || idadeValida > 150) {


   idadeValida = Number(prompt("Idade inválida:"))


}


let salario = Number(prompt("Digite o salário:"))


while (salario <= 0) {


   salario = Number(prompt("Salário inválido:"))


}


let genero = prompt("Digite o gênero (f/m):").toLowerCase()


while (genero !== "f" && genero !== "m") {


   genero = prompt("Digite apenas f ou m:")


}


let estadoCivil = prompt("Digite estado civil (s,c,v,d):").toLowerCase()


while (


   estadoCivil !== "s" &&


   estadoCivil !== "c" &&


   estadoCivil !== "v" &&


   estadoCivil !== "d"


) {


   estadoCivil = prompt("Estado civil inválido:")


}


alert("Dados válidos!")


// Explicação:


// while repete até os dados ficarem válidos.



// ======================================================


// EXERCÍCIO 17


// Faça um jogo de adivinhação,


// em que o computador sorteará


// um número e o usuário terá que


// adivinhar qual foi o número


// sorteado e só sairá quando


// acertar. Avise se o palpite é


// maior ou menor do que o que


// foi sorteado para ajudar o


// usuário.


// ======================================================


const numeroSecreto = Math.floor(Math.random() * 10) + 1


let acertou = false


while (!acertou) {


   const palpite = Number(prompt("Digite um número de 1 a 10:"))


   if (palpite === numeroSecreto) {


       alert("Parabéns! Você acertou!")


       acertou = true


   } else if (palpite > numeroSecreto) {


       alert("O número é menor.")


   } else {


       alert("O número é maior.")


   }


}


// Explicação:


// O loop continua até o usuário acertar.



// ======================================================


// EXERCÍCIO 18


// Faça um programa usando


// estrutura de repetição que


// mostre a tabuada até 10 de


// qualquer número fornecido.


// ======================================================


const tabuada = Number(prompt("Digite um número:"))


for (let i = 1; i <= 10; i++) {


   console.log(`${tabuada} x ${i} = ${tabuada * i}`)


}


// Explicação:


// O loop repete de 1 até 10.



// ======================================================


// EXERCÍCIO 19


// Escreva um programa que


// solicite ao usuário um número e


// verifica todos os números pelos


// quais ele é divisível.


// ======================================================


const numeroDivisor = Number(prompt("Digite um número:"))


for (let i = 1; i <= numeroDivisor; i++) {


   if (numeroDivisor % i === 0) {


       console.log(`${i} é divisor de ${numeroDivisor}`)


   }


}


// Explicação:


// % verifica o resto da divisão.


// Se o resto for 0, o número é divisor.
 
