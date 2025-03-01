let turno = true;
const movimientos = new Array(9).fill(null);

function ganador(i,j,k) {
    if (movimientos[i] == movimientos[j] 
        && movimientos[j] == movimientos[k] 
        && movimientos[k] != null) {
        return true;
    }
    return false;
}

const casillas = document.querySelectorAll('#casilla');
casillas.forEach((casilla,index) => {
    casilla.addEventListener('click', (e) => {
        e.preventDefault();
        e.target.textContent = turno ? 'X' : 'O';
        movimientos[index] = turno;
        casilla.disabled = true;
        if (ganador(0,1,2) || ganador(3,4,5) || ganador(6,7,8) ||
            ganador(0,3,6) || ganador(1,4,7) || ganador(2,5,8) ||
            ganador(0,4,8) || ganador(2,4,6)){
            document.querySelector('#mensaje').textContent = `Ganador: ${turno?'x':'o'}`;
            casillas.forEach(casilla => casilla.disabled = true);
        };
            turno = !turno;
    });
});

function reset() {
    casillas.forEach((casilla,index) => {
        casilla.textContent = '';
        casilla.disabled = false;
        movimientos[index] = null;
    });
    turno = true;
    document.querySelector('#mensaje').textContent = '';
}