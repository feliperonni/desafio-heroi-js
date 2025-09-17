# Desafio DIO: Classificação de Heróis

Este projeto é um desafio da **DIO (Digital Innovation One)** para testar habilidades em **Node.js**, **JavaScript**, **Git** e **GitHub**.

O objetivo é criar um programa que classifica heróis com base na experiência (**XP**) e exibe o nível correspondente de cada um.

---

## Tecnologias utilizadas

- JavaScript
- Node.js
- Git & GitHub

---

## Descrição do código

O programa utiliza:

1. Array de objetos para armazenar heróis e XP.
2. Loop `for` para percorrer cada herói.
3. Condicionais (`if / else if / else`) para determinar o nível.
4. `console.log` para exibir o nome do herói e seu nível.

### Exemplo de dados

```javascript
let herois = [
  { nome: "Homem Aranha", xp: 6000 },
  { nome: "Homem de ferro", xp: 1500 },
  { nome: "Venom", xp: 3500 },
  { nome: "Hulk", xp: 990 },
];
Lógica de classificação

Critérios de XP para determinar o nível do herói:

0 - 1000        : Ferro
1001 - 2000    : Bronze
2001 - 5000    : Prata
5001 - 7000    : Ouro
7001 - 8000    : Platina
8001 - 9000    : Ascendente
9001 - 10000   : Imortal
>10000         : Radiante

Saída esperada
O Herói: Homem Aranha está no nível: Ouro
O Herói: Homem de ferro está no nível: Bronze
O Herói: Venom está no nível: Prata
O Herói: Hulk está no nível: Ferro

Conclusão

Este desafio permite praticar conceitos fundamentais de JavaScript, como arrays, loops e condicionais, além de reforçar o uso de Git e GitHub para versionamento de código.
O código é simples, mas ajuda a consolidar boas práticas e lógica de programação.
