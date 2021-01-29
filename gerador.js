senhaGerada = '';
letrasAlfabeto = 'abcdefghijklmnopqrstuvwxyz';
numeros = '';

function gerarLetra()
{
    var tamLetrasAlfabeto = letrasAlfabeto.length;

    var letraGerada = letrasAlfabeto.charAt(Math.floor((Math.random() * tamLetrasAlfabeto)));

    return letraGerada;
}