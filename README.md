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

# 📌 Dicas para a prova

✅ Sempre converter números usando `Number()`

✅ Validar campos vazios

✅ Usar `console.log()` para testar

✅ Cuidado com `==` e `===`

✅ `while` precisa alterar variável

✅ Leia o exercício antes de programar

---

# 🎯 Boa prova!
