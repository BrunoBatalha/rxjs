const { BehaviorSubject, Subject } = require('rxjs')

console.log('BehaviourSubject - pega o último next e os próximos')
const behaviourSubject = new BehaviorSubject(0); // 0 is the initial value
 
behaviourSubject.subscribe({
  next: (v) => console.log(`observerA: ${v}`)
});
 
behaviourSubject.next(1);
behaviourSubject.next(2);
 
behaviourSubject.subscribe({
  next: (v) => console.log(`>observerB<: ${v}`)
});
 
behaviourSubject.next(3);



console.log('\n\nSubject - pega a partir dos próximos nexts')
const subject = new Subject(0); // 0 is the initial value
 
subject.subscribe({
  next: (v) => console.log(`observerA: ${v}`)
});
 
subject.next(1);
subject.next(2);
 
subject.subscribe({
  next: (v) => console.log(`>observerB<: ${v}`)
});
 
subject.next(3);