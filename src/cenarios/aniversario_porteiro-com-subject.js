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

function ouvidoDoLiderDaFesta(value) {
  console.log("Lider recebeu mensagem: " + value);
}

console.log('Lider pediu favor do porteiro');
// começar a olhar
porteiroSubject.subscribe(ouvidoDoLiderDaFesta);
console.log('Lider subiu pro apartamento');

let count = 0;
const interval = setInterval(() => {
  if (count == 5) {
    porteiroSubject.next("ELE chegou!");
    clearInterval(interval);
  }
  count++;
}, 1000);
