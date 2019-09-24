// var axios = require('axios');

const btnInc = document.getElementById('incrementBtn')
const btnDec = document.getElementById('decrementBtn')
const btnRes = document.getElementById('resetBtn')


btnInc.addEventListener('click', clickInc)
btnDec.addEventListener('click', clickDec)
btnRes.addEventListener('click', clickRes)

function clickInc(){
    axios.get('/increment')
    .then(function (response) {      
        document.getElementById('currentCount').innerHTML = response.data
        console.log(response);
    })
} 

function clickDec(){
    axios.get('/decrement')
    .then(function (response) {      
        document.getElementById('currentCount').innerHTML = response.data
        console.log(response);
    })
} 

function clickRes(){
    axios.get('/reset')
    .then(function (response) {      
        document.getElementById('currentCount').innerHTML = response.data
        console.log(response);
    })
} 
// function clickInc(){
//     const response = fetch('http://localhost:3000/increment')    
// }

// function clickDec(){
//     const response = fetch('http://localhost:3000/decrement')               
// }

// function clickRes(){
//     const response = fetch('http://localhost:3000/reset')               
// }
