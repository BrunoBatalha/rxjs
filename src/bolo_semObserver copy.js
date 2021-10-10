let count = 0;
const intervalForno = setInterval(() => {  
  count++;
}, 1000);


const intervalPronto = setInterval(()=>{
    seraQueTaPronto();
},500)

function seraQueTaPronto() {
  console.log("\nEu: Vou ver se tá pronto...");
  if (count == 5) {
    clearInterval(intervalForno);
    clearInterval(intervalPronto);
    console.log("FINALMENTE PRONTO!");
    return;
  }
  console.log("Ainda não está pronto :(");
}

