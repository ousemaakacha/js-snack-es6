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

// creo array solo per i nomi e falli

// stampo il risultato
