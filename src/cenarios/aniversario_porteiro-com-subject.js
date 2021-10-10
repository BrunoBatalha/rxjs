/** 1
- aniversário porteiro com observer
[estoria]: lider da festa pede para porteiro avisar quando
o aniversariante estiver chegando
 - observer: pessoa que faz supresa
 - subject: porteiro
 - event: aniversariante chegando
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
// começar a olhar
porteiroSubject.subscribe(liderDaFestaObserver);
console.log('Lider subiu pro apartamento');

let count = 0;
const interval = setInterval(() => {
  if(count == 4){    
    porteiroSubject.next('Acho que vi o carro... Ah não era não')
  }
  if (count == 5) {
    porteiroSubject.next("ELE chegou!");
    porteiroSubject.complete();
    clearInterval(interval);
  }
  count++;
}, 1000);
