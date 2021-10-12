/**
 - A festa surpresa no apartamento...
 - sem obsever
 - líder da festa fica olhando toda hora se aniversariante está chegando
 */
const readline = require("readline");
let count = Math.floor(Math.random() * 10) + 5;

function olharPelaJanela() {
  count--;
  if (count > 0) {
    console.log("Não chegou...");
  } else {
    console.log("Chegou !");
  }
}

client();

async function client() {
  console.log("Tá perto dele chegar...");
  while (true) {
    const resp = await readInput("Olhar se chegou? s/n");
    if (resp.toLowerCase() == "s") {
      olharPelaJanela();
    }
    if (count <= 0) {
      break;
    }
  }
}

function readInput(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
      rl.close();
    });
  });
}
