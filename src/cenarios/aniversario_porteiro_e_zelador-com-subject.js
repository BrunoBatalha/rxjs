/**
- A festa surpresa no apartamento + porteiro + zelador...
- zelador vai acabar com a surpresa
- porteiro  vai avisar líder da festa
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
porteiroSubject.subscribe(liderDaFestaObserver);
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