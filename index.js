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
        e.target.innerHTML = turno ? '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="red"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>' : '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="blue"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-circle"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /></svg>';
        movimientos[index] = turno;
        casilla.disabled = true;
        if (ganador(0,1,2) || ganador(3,4,5) || ganador(6,7,8) ||
            ganador(0,3,6) || ganador(1,4,7) || ganador(2,5,8) ||
            ganador(0,4,8) || ganador(2,4,6)){
            document.querySelector('#mensaje').innerHTML = `Ganador: ${turno?'<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="red"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>':'<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="blue"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-circle"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /></svg>'}`;
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