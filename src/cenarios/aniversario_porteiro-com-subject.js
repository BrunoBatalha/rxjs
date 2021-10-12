/** 
- A festa surpresa no apartamento + porteiro....
- com observer + subject
- lider da festa pede para porteiro avisar quando o aniversariante estiver chegando
*/

const { Subject } = require("rxjs");
const porteiroSubject = new Subject();
const liderDaFestaObserver = {
  next(mensagem){
    console.log("Lider recebeu mensagem: " + mensagem);    
  },
  complete(){
    console.log('Lider desliga as luzes')
  }
}



console.log('Lider pediu favor do porteiro');
porteiroSubject.subscribe(liderDaFestaObserver);
console.log('Lider subiu pro apartamento');

let count = 0;
const interval = setInterval(() => {
  if(count == 4){    
    porteiroSubject.next('Acho que vi o carro... Ah, não era não')
  }
  if (count == 5) {
    porteiroSubject.next("Ele chegou!");
    porteiroSubject.complete();
    clearInterval(interval);
  }
  count++;
}, 1000);
