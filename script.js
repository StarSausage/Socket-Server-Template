let ws = new WebSocket('wss://alchemist-interactive-5b89476a4dec.herokuapp.com/:443');


//CONTROL TD
let controlledByTD = document.querySelector('.controlledByTD');

let controlTD1 = document.querySelector('.controllTD1');
let controlTD = document.getElementById('1');
controlTD1.addEventListener('mousedown', (event) => {
    console.log('click!')
    ws.send(JSON.stringify({'radio1': controlTD1.value}))
});

let controlTD2 = document.querySelector('.controllTD2');
controlTD2.addEventListener('mousedown', (event) => {
    console.log('click!')
    ws.send(JSON.stringify({'radio1': controlTD2.value}))
});

let controlTD3 = document.querySelector('.controllTD3');
controlTD3.addEventListener('mousedown', (event) => {
    console.log('click!')
    ws.send(JSON.stringify({'radio1': controlTD3.value}))
});

let controlTD4 = document.querySelector('.controllTD4');
controlTD4.addEventListener('mousedown', (event) => {
    console.log('click!')
    ws.send(JSON.stringify({'radio1': controlTD4.value}))
});

let controlTD5 = document.querySelector('.controllTD5');
controlTD5.addEventListener('mousedown', (event) => {
    console.log('click!')
    ws.send(JSON.stringify({'radio1': controlTD5.value}))
});

let controlTD6 = document.querySelector('.controllTD6');
controlTD6.addEventListener('mousedown', (event) => {
    console.log('click!')
    ws.send(JSON.stringify({'radio1': controlTD6.value}))
});

let controlTD7 = document.querySelector('.controllTD7');
controlTD7.addEventListener('mousedown', (event) => {
    console.log('click!')
    ws.send(JSON.stringify({'radio1': controlTD7.value}))
});
let controlTD8 = document.querySelector('.controllTD8');
controlTD8.addEventListener('mousedown', (event) => {
    console.log('click!')
    ws.send(JSON.stringify({'radio1': controlTD8.value}))
});


let controlTD9 = document.querySelector('.controllTD9');
controlTD9.addEventListener('mousedown', (event) => {
    console.log('click!')
    ws.send(JSON.stringify({'radio1': controlTD9.value}))
});

let controlTD10 = document.querySelector('.controllTD10');
controlTD10.addEventListener('mousedown', (event) => {
    console.log('click!')
    ws.send(JSON.stringify({'radio1': controlTD10.value}))
});

let controlTD11 = document.querySelector('.controllTD11');
controlTD11.addEventListener('mousedown', (event) => {
    console.log('click!')
    ws.send(JSON.stringify({'radio1': controlTD11.value}))
});

let controlTD12 = document.querySelector('.controllTD12');
controlTD12.addEventListener('mousedown', (event) => {
    console.log('click!')
    ws.send(JSON.stringify({'radio1': controlTD12.value}))
});


//WEBSOCKET

ws.addEventListener('open',(event)=> {
    console.log('websocket open')
});

ws.addEventListener('error', (error)=> {
    console.error('websocket closed')
});

ws.addEventListener('close', (event)=> {
    console.log('websocket closed')
})


//TD
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



