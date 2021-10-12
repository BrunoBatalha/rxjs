/** 
- A festa surpresa no apartamento + porteiro....
- com observer + Observable
- lider da festa pede para porteiro avisar quando o aniversariante estiver chegando
*/

const { Observable, observeOn, asyncScheduler } = require("rxjs");
const liderDaFestaObserver = {
  next(value) {
    console.log(value);
  },
  error(err) {
    console.log('11h Líder recebe noticia: '+ err);
  },
  complete() {
    console.log("12h10 Desligam as luzes e esperam aniversariante subir");
  },
}
// const zeladorObserver = {
//   next(value) {
//     console.log(value);
//   },
//   error(err) {
//     console.log('11h Líder recebe noticia: '+ err);
//   },
//   complete() {
//     console.log("12h10 Desligam as luzes e esperam aniversariante subir");
//   },
// }

const porteiroObservable = new Observable((subscribe) => {
  //subscribe.error("O aniversariante sofreu um acidente");
  setTimeout(() => {
    subscribe.next("12h Porteiro avisa 'o aniversariante chegou!' [evento]");
    subscribe.complete();
  }, 3000);
}); //.pipe(observeOn(asyncScheduler));

console.log("4h Aniversariante saiu...");
console.log("5h Líder da festa pede para o porteiro avisar...");
porteiroObservable.subscribe(liderDaFestaObserver);
// porteiroObservable.subscribe(zeladorObserver);
console.log("5h30 Líder da festa volta pro apartamento");
