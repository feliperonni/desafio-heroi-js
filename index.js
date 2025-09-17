let herois = [
  { nome: "Homem Aranha", xp: 6000 },
  { nome: "Homem de ferro", xp: 1500 },
  { nome: "Venom", xp: 3500 },
  { nome: "hulk", xp: 990 },
];

for (let heroi = 0; heroi < herois.length; heroi++) {
  let nome = herois[heroi].nome;
  let xp = herois[heroi].xp;
  let nivel = "";

  if (xp < 1000) {
    nivel = "Ferro";
  } else if (xp <= 2000) {
    nivel = "Bronze";
  } else if (xp <= 5000) {
    nivel = "Prata";
  } else if (xp <= 7000) {
    nivel = "Ouro";
  } else if (xp <= 8000) {
    nivel = "Platina";
  } else if (xp <= 9000) {
    nivel = "Ascendente";
  } else if (xp <= 10000) {
    nivel = "Imortal";
  } else {
    nivel = "Radiante";
  }

  console.log(`O Herói: ${nome} está no nível: ${nivel}`);
}
