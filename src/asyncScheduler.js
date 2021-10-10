const { from, Observable, observeOn, asyncScheduler } = require("rxjs");

const observable = new Observable((subscribe) => {
    subscribe.next("Passou tempo");
}).pipe(observeOn(asyncScheduler));

console.log("Antes");
observable.subscribe(console.log);
console.log("Depois");
