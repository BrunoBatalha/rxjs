/** 
- A festa surpresa no apartamento + porteiro + vários carros....
- filter
- lider da festa pede para porteiro avisar  carros que estão chegando e grita quando for o do aniversariante
*/


const { Observable, pipe } = require("rxjs");
const { filter, map } = require("rxjs/operators");
const liderDaFestaObserver = {
  next(value) {
    console.log(value);
  },
  error(err) {
    console.log("11h Líder recebe noticia: " + err);
  },
  complete() {
    console.log("12h10 Desligam as luzes e esperam aniversariante subir");
  },
};

const carros = [
  {
    marca: "Nissan",
    cor: "vermelho",
  },
  {
    marca: "Hyundai",
    cor: "azul",
  },
  {
    marca: "Honda",
    cor: "preto",
  },
  {
    marca: "BMW",
    cor: "branco",
  },
  {
    marca: "Toyota",
    cor: "amarelo",
  },
  {
    marca: "Volkswagen",
    cor: "roxo",
  },
];
const porteiroObservable = new Observable((subscribe) => {
  //subscribe.error("O aniversariante sofreu um acidente");
  let indexCarro = 0;
  const interval = setInterval(function () {
    if(indexCarro >= carros.length){
      clearInterval(interval);
      subscribe.complete()
    }
    const carroVindo = carros[indexCarro];
    subscribe.next(carroVindo);
    indexCarro++;
  }, 1000);
}).pipe(
  filter((carroVindo) => carroVindo.marca == "Toyota" && carroVindo.cor == "amarelo"),
  map(() => "12h Porteiro avisa 'o aniversariante chegou!' [evento]")
); //.pipe(observeOn(asyncScheduler));

console.log("4h Aniversariante saiu...");
console.log("5h Líder da festa pede para o porteiro avisar...");
porteiroObservable.subscribe(liderDaFestaObserver);
// porteiroObservable.subscribe(zeladorObserver);
console.log("5h30 Líder da festa volta pro apartamento");
