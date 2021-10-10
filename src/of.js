const { of } = require('rxjs');

const obs = of('Bruno', 'Batalha', 20, 'Anos')

obs.subscribe(observer=>{
    console.log(observer)
})

