let ws = new WebSocket('wss://alchemist-interactive-5b89476a4dec.herokuapp.com/:443');

let controlledByTD = document.querySelector('.controlledByTD');

let controlTD = document.querySelector('.controllTD');
controlTD.addEventListener('input', (event) => {
    console.log(controlTD.value);
    ws.send(JSON.stringify({'slider1': controlTD.value/100.0}))
});

ws.addEventListener('open',(event)=> {
    console.log('websocket open')
});

ws.addEventListener('message', (message) => {
    if(message.data == 'ping') {
        ws.send('pong');
    }

    let data = JSON.parse(message.data);

    if('slider1' in data){
        let val = data['slider1'];
        controlledByTD.value = val*100;
    }

    console.log(data);
});

ws.addEventListener('error', (error)=> {
    console.error('websocket closed')
});

ws.addEventListener('close', (event)=> {
    console.log('websocket closed')
})