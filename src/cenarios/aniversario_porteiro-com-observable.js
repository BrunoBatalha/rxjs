/** 1
- aniversário porteiro com observer
[estoria]: lider da festa pede para porteiro avisar quando
o aniversariante estiver chegando
 - observer: pessoa que faz supresa
 - subject: porteiro
 - event: aniversariante chegando
*/

const { Observable, observeOn, asyncScheduler } = require("rxjs");

const donoDaFesta = new Observable((subscribe) => {
  //subscribe.error("O aniversariante sofreu um acidente");
  setTimeout(() => {
    subscribe.next("12h Porteiro avisa 'o aniversariante chegou!' [evento]");
    subscribe.complete();
  }, 3000);
}); //.pipe(observeOn(asyncScheduler));

console.log("4h Aniversariante saiu...");
console.log("5h Líder da festa pede para o porteiro avisar...");
donoDaFesta.subscribe({
  next(value) {
    console.log(value);
  },
  error(err) {
    console.log('11h Líder recebe noticia: '+ err);
  },
  complete() {
    console.log("12h10 Desligam as luzes e esperam aniversariante subir");
  },
});
console.log("5h30 Líder da festa volta pro apartamento");
