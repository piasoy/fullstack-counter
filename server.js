var express = require('express');
var app = express();


app.use(express.static(__dirname + '/public'));

var count = 0;
function incrementCount(request, response, nextFn){
    count++
    response.send('' + count)
    console.log('increment count: ', count)
}

function decrementCount(request, response, nextFn){
    count--
    response.send('' + count)
    console.log('decrement count: ', count)
}

function resetCount(request, response, nextFn){
    count = 0
    response.send('' + count)
    console.log('reset count: ', count)
}

function getCountValue(request, response, nextFn){
    response.send('' + count)
    console.log('count value: ', count)
}

app.get('/increment', incrementCount)
app.get('/decrement', decrementCount)
app.get('/reset', resetCount)
app.get('/value', getCountValue)

app.listen(3000, function(){
    console.log('This is my server for the counter exercise.')
})