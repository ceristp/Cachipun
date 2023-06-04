alert("Para jugar al Cachipun, deberas escribir (piedra), (papel) o (tijera) \n*Jugaras contra mi, La maquina, \"Tranquilo pronto dominare el mundo\" \n\n*Reglas del Juego:* \n\n-Piedra gana a Tijera \n-Tijera gana a Papel \n-Papel gana a Piedra \n\nCristopher Munoz");
var nJugadas = parseInt(prompt("¿Cuantas partidas jugará?: \nEjemplo:", "3"));
var selecciona;
function unadeTres() {
    //calcula el valor random de la computadora como pide el pdf.
    jugadaNum = Math.floor(Math.random() * 3);
    if (jugadaNum == 0) return "piedra";
    else if (jugadaNum == 1) return "papel";
    else return "tijera";
}
function compara(jugador, maquina) {
    if (jugador == "piedra" && maquina == "tijera") return 0;
    if (jugador == "papel" && maquina == "piedra") return 0;
    if (jugador == "tijera" && maquina == "papel") return 0;
    return 1;
}
for (var i = 0; i < nJugadas; i++) {
    selecciona = prompt("Escribe una alternativa: (piedra, papel o tijera): \nEjemplo:", "tijera");
    selecciona = selecciona.toLowerCase();
    comPARA = unadeTres();
    console.log(comPARA);
    if (selecciona == comPARA) {
        alert("Empataste conmigo, no fuiste superior Humano");
    } else {
        var respuesta = compara(selecciona, comPARA);
        if (respuesta == 0) {
            alert("Felicitaciones Humano, Me ganaste");
        } else {
            alert("Perdiste Humano, Solo rindete");
        }
    }
}