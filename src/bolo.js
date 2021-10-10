const readline = require('readline');

function readInput(question){
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    return new Promise(resolve=>{
        rl.question(question, answer => {
            resolve(answer);
            rl.close();
        })
    })
}

function you(){
    console.log('V: Tirar o bolo forno!')
}

async function forno(interessados){
    while(true){
        const resp = await readInput('O bolo está pronto? s/n')
        if(resp.toLowerCase() == 's'){
            (interessados || []).forEach(obs => obs());
        }else if(resp.toLowerCase() == 'q'){
            break;
        }
    }
}

forno([you])