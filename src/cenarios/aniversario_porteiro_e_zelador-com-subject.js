/**
 - aniversário porteiro traíra com + de 1 observer
  - zelador mau vai avisar o aniversariante e
  - porteiro bem vai avisar a  dona da festa
 */
const { Subject } = require("rxjs");
const porteiroSubject = new Subject();
const liderDaFestaObserver = {
  next(mensagem){
    console.log("Lider recebeu mensagem: " + mensagem);    
  }
}
const zeladorObserver = {
  next(mensagemQueEscutou){
    console.log("Zelador falar pro Aniversariante que escutou: " + mensagemQueEscutou);
  }
}

console.log('Lider pediu favor do porteiro, mas zelador escutou');
// começar a olhar
porteiroSubject.subscribe(liderDaFestaObserver);
// zelador fica de olho tmb
porteiroSubject.subscribe(zeladorObserver);
console.log('Lider subiu pro apartamento');

let count = 0;
const interval = setInterval(() => {
  if (count == 5) {
    porteiroSubject.next("Se prapara pra festa, ele chegou!");
    clearInterval(interval);
  }
  count++;
}, 1000);
