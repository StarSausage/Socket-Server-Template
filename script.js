let ws = new WebSocket('wss://alchemist-interactive-5b89476a4dec.herokuapp.com/:443');

//SUBTMIT MONTH
let opacityValue = 0;
let jsonObject = 
{
'fadeOut': opacityValue,
'fadeIn': opacityValue,
'month' : document.getElementById("week").value,
'userID': userID
};
let fadedIn = false;
let submit = document.querySelector('.Submitter');
submit.addEventListener('mousedown', (event) => {
    if(fadedIn==false){
        fadeIn();
    }
    else{
        fadeOut();
    }
        
    ws.send(JSON.stringify({'month': document.getElementById("week").value,'radio1': domeSection}))
});

var button = document.getElementById('buttons');

var buttons = button.querySelectorAll('input');

for ( var i =0; i < buttons.length; i++){
    buttons[i].addEventListener("mousedown", buttonClick);
}

function buttonClick(){
    domeSection = this.value;
    this.focus();
    console.log(this, domeSection);
}

function fadeOut() {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.01){
            clearInterval(timer);
            op=0;
        }
        opacityValue = op;
        opacityValue = op * 100;
        op -= op * 0.01;
        fadedIn = false;
        console.log(opacityValue)
        jsonObject = {'fadeOut': opacityValue, 'fadeIn': opacityValue};
        ws.send(JSON.stringify(jsonObject))
        console.log(domeSection);
        
    }, 10);
}
function fadeIn() {
    var op = 0.1;  // initial opacity
    var timer = setInterval(function () {
        if (op >= 10){
            clearInterval(timer);
            
        }
        opacityValue = op;
        opacityValue = op * 10;
        op += op * 0.01;
        fadedIn = true;
        console.log(opacityValue)
        jsonObject = {'fadeOut': opacityValue, 'fadeIn': opacityValue};
        ws.send(JSON.stringify(jsonObject))
        console.log(domeSection);
    }, 10);
}

//CONTROL TD



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



