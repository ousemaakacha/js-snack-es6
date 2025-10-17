console.log("SNACK1");

// creaiamo array
const bici = [
  { nome: "Bianchi Sprint", peso: 8 },
  { nome: "Trek Domane", peso: 6.8 },
  { nome: "Specialized Tarmac", peso: 6.5 },
  { nome: "Cannondale SuperSix", peso: 7.0 },
];

// inizio con stabilere una variabile per bici piú  leggera
let lightBici = bici[0];

// ultilizzo ciclo per trovare bici con il peso minore
for (let i = 1; i < bici.length; i++) {
  if (bici[i].peso < lightBici.peso) {
    lightBici = bici[0];
  }
}

console.log(lightBici.nome);
