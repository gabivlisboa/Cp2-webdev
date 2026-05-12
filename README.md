# 📘 Guia Completo de JavaScript — CP2 FIAP

> Guia rápido para consulta na prova.

---

# 🚀 Introdução ao JavaScript

## O que é JavaScript?
JavaScript é uma linguagem de programação usada para criar páginas web interativas.

---

# 📌 Variáveis

```js
let nome = "Gabriella"
const PI = 3.14
```

---

# 📌 Condicionais

```js
let idade = 18

if (idade >= 18) {
  console.log("Maior de idade")
} else {
  console.log("Menor de idade")
}
```

---

# 📌 Operadores

## Relacionais

```js
5 == "5" // true
5 === "5" // false
```

## Lógicos

```js
&& // E
|| // OU
! // NÃO
```

---

# 📌 Loops

## While

```js
let contador = 1

while (contador <= 5) {
  console.log(contador)
  contador++
}
```

## For

```js
for (let i = 1; i <= 10; i++) {
  console.log(i)
}
```

---

# 📌 Funções

```js
function soma(a, b) {
  return a + b
}
```

## Arrow Function

```js
const soma = (a, b) => a + b
```

---

# 📌 Métodos de String

```js
nome.length
nome.includes("a")
nome.trim()
nome.toUpperCase()
nome.toLowerCase()
nome.replaceAll("a", "o")
```

---

# 📌 Math

```js
Math.random()
Math.floor()
Math.ceil()
Math.round()
```

---

# 📌 Exercício Importante — Validação

```js
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
    estadoCivil = prompt("Estado civil inválido")
}

alert("Dados cadastrados com sucesso!")
```

---


## Inserindo JavaScript no HTML

<body>
<script src="script.js"></script>
</body>

## Comentários

// comentário

/* comentário */

--------------------------------------------------

# Variáveis

## Formas de declarar

let nome = "Ana"
const idade = 20

## Importante
- let → valor que pode mudar
- const → valor fixo
- var → antigo e pouco usado hoje

--------------------------------------------------

# Tipos de Dados

## String
Texto:

"Olá"

## Number
Números:

10
3.14

Valores especiais:
- Infinity
- NaN → operação inválida

## Boolean

true
false

## Null
Valor vazio:

null

## Undefined
Variável sem valor:

let nome

--------------------------------------------------

# typeof

Serve para descobrir o tipo:

typeof 10 // "number"
typeof "oi" // "string"
typeof true // "boolean"

--------------------------------------------------

# Interação com Usuário

## alert()

alert("Olá")

## prompt()

prompt("Digite seu nome")

Pode retornar:
- texto
- null se cancelar

## confirm()

confirm("Deseja continuar?")

Retorna:
- true
- false

--------------------------------------------------

# Concatenação

## Forma antiga

"Nome: " + nome

## Template String (ES6)

`Nome: ${nome}`

⚠️ Usa crase `

--------------------------------------------------

# Operadores Matemáticos

+  // soma
-  // subtração
*  // multiplicação
/  // divisão
%  // resto
** // potência

--------------------------------------------------

# Conversão de Tipos

## Para número

Number("42")
parseInt("42.9")
parseFloat("42.9")

Diferença:
- Number() → precisa ser número válido
- parseInt() → pega parte inteira
- parseFloat() → mantém decimal

## Para string

String(123)

## Para boolean

Boolean(1) // true
Boolean(0) // false

Falsy:
- 0
- ""
- null
- undefined
- NaN

--------------------------------------------------

# Operadores Relacionais

>
<
>=
<=
===  // igual estrito
!==  // diferente estrito

⚠️ Use:
===
!==

Evite:
==

--------------------------------------------------

# Comparação de Strings

"ana" < "bia"

- compara letra por letra
- maiúsculas ≠ minúsculas

"Ana" !== "ana"

--------------------------------------------------

# if / else

## if simples

if (nota >= 6) {
}

## if / else

if (nota >= 6) {
} else {
}

## else if

if () {

} else if () {

} else {

}

--------------------------------------------------

# Operadores Lógicos

&&  // E
||  // OU
!   // NÃO

--------------------------------------------------

# Operador Ternário

condicao ? verdadeiro : falso

Exemplo:

idade >= 18 ? "Maior" : "Menor"

--------------------------------------------------

# switch/case

switch(valor) {
case "1":
 break
default:
}

⚠️ lembrar do break

--------------------------------------------------

# Short Circuit

## &&

logado && alert("oi")

## ||

const nome = usuario || "Visitante"

--------------------------------------------------

# Nullish Coalescing

??

Só considera:
- null
- undefined

Exemplo:

const valor = pontos ?? 0

--------------------------------------------------

# Funções

## O que é função

function saudacao() {
}

## Return

return resultado

## Parâmetros

function soma(a, b) {
}

## Parâmetros padrão

function ola(nome = "Visitante") {
}

## Arrow Function

const soma = (a, b) => {
return a + b
}

## Boas práticas
- fazer UMA coisa
- ser independente

--------------------------------------------------

# Loops

## for

for(let i = 1; i <= 5; i++) {
}

## while

while(condicao) {
}

⚠️ cuidado com loop infinito

## do...while

do {

} while(condicao)

## break

break

## continue

continue

## Acumulador

soma = soma + numero

## Contador

contador++

--------------------------------------------------

# Erros comuns

## Loop infinito

Esquecer:

i++

## Off-by-one

<
<=

--------------------------------------------------

# Quando usar

- for → sei quantas vezes repetir
- while → não sei quantas vezes
- do...while → executa pelo menos 1 vez

--------------------------------------------------

# Objetos Pré-definidos

## String

### Buscar texto

includes()
startsWith()
endsWith()
indexOf()

### Modificar texto

trim()
toLowerCase()
toUpperCase()
replace()
replaceAll()

### Extração

slice()
split()

### Tamanho

.length

--------------------------------------------------

# Number

## Verificações

Number.isNaN()
Number.isInteger()
Number.isFinite()

## Formatação

toFixed(2)

⚠️ retorna STRING

--------------------------------------------------

# Math

## Arredondamento

Math.round()
Math.ceil()
Math.floor()
Math.trunc()

## Máximo e mínimo

Math.max()
Math.min()
Math.abs()

## Potência e raiz

Math.pow()
Math.sqrt()

## Número aleatório

Math.random()

Muito usado:

Math.floor(Math.random() * 10)

--------------------------------------------------

# Date

## Criar data

new Date()

⚠️ mês começa em 0:
0 = janeiro

## Ler data

getFullYear()
getMonth()
getDate()
getDay()

## Formatar data

toLocaleDateString("pt-BR")

--------------------------------------------------

# Temporal

Nova API de datas:
- mais moderna
- imutável
- meses começam em 1
- substitui problemas do Date

--------------------------------------------------

# Resumo Final

- String → mexe em textos
- Math → cálculos
- Number → validações
- Date → datas
- Temporal → versão moderna do Date
- Use ===
- Arrow function usa =>
- for = repetição definida
- while = repetição por condição
- break sai do loop
- continue pula repetição



# 📌 Dicas para a prova

✅ Sempre converter números usando `Number()`

✅ Validar campos vazios

✅ Usar `console.log()` para testar

✅ Cuidado com `==` e `===`

✅ `while` precisa alterar variável

✅ Leia o exercício antes de programar

---

# 🎯 Boa prova!
