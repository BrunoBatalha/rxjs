const { Observable } = require("rxjs");

const observable = new Observable((subscribe) => {
  console.log("Bolo entrou no forno....");
  let count = 0;
  const interval = setInterval(() => {
    console.log(`Passou ${count} segundos`);
    if (count == 5) {
      clearInterval(interval);
      subscribe.next("Bolo ficou pronto!");
      subscribe.complete();
    }
    count++;
  }, 1000);
});

observable.subscribe((value) => {
  console.log(value);
});
