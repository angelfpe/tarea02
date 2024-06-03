function problema1() {
    console.log('Ejecutando problema1');
    var input = document.querySelector('#p1-input').value;
    var palabras = input.split(' ');
    var palabrasInvertidas = palabras.reverse();
    var resultado = palabrasInvertidas.join(' ');
    document.querySelector('#p1-output').textContent = resultado;
}

function problema3() {
    console.log('Ejecutando problema3');
    var input = document.querySelector('#p3-input').value;
    var palabras = input.split(',');
    var palabraMaxUnicos = '';
    var maxUnicos = 0;

    function contarCaracteresUnicos(palabra) {
        var caracteresUnicos = new Set(palabra);
        return caracteresUnicos.size;
    }

    for (var palabra of palabras) {
        var numUnicos = contarCaracteresUnicos(palabra);
        if (numUnicos > maxUnicos) {
            maxUnicos = numUnicos;
            palabraMaxUnicos = palabra;
        }
    }

    document.querySelector('#p3-output').textContent = 'Palabra con más caracteres únicos: ' + palabraMaxUnicos;
}

document.querySelector('#p1-button').onclick = problema1;
document.querySelector('#p3-button').onclick = problema3;