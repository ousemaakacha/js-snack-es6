console.log("SNACK 2");

// creo array per squadre

const squadre = [
  { nome: "Juventus", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Milan", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Inter", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Napoli", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Roma", puntiFatti: 0, falliSubiti: 0 },
];

// scrivo funzione per generare numeri random
function randomNumb(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//  ciclo for per numeri casuali punti e falli
for (let i = 0; i < squadre.length; i++) {
  squadre[i].puntiFatti = randomNumb(0, 100);
  squadre[i].falliSubiti = randomNumb(0, 50);
}
// creo array solo per i nomi e falli
const soloFalli = [];

for (let i = 0; i < squadre.length; i++) {
  const squadra = squadre[i];
  const newObj = {
    nome: squadra.nome,
    falliSubiti: squadra.falliSubiti,
  };
  soloFalli.push(newObj);
}
// stampo il risultato
