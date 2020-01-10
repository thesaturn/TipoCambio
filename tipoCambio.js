var https = require('https');
var invocaProcedimiento = require('./procedimientoSQL.js')
var contador = 12;

https.get('https://mindicador.cl/api', function(res) {
    res.setEncoding('utf-8');
    var data = '';

    res.on('data', function(chunk) {
        data += chunk;
    });
    res.on('end', function() {
        var dailyIndicators = JSON.parse(data);
        var valorDolar = dailyIndicators.dolar.valor;
        var valorUF = dailyIndicators.uf.valor
        invocaProcedimiento.funcDolar(valorDolar);
        invocaProcedimiento.funcUF(valorUF)
        console.log(dailyIndicators.uf.valor)
        console.log(dailyIndicators.dolar.valor)
        console.log()
    });

}).on('error', function(err) {
    console.log('Error al consumir la API!');
});
