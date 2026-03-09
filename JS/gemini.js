function updateTimer() {
    const tournamentDate = new Date('March 1, 2026 00:00:00').getTime();
    const now = new Date().getTime();
    const distance = tournamentDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    const timerElement = document.getElementById('timer');

    if (distance < 0) {
        timerElement.innerHTML = "🎾 EL TORNEO HA COMENZADO";
    } else {
        timerElement.innerHTML = `FALTAN ${days}D : ${hours}H : ${mins}M`;
    }
}

setInterval(updateTimer, 1000);
updateTimer();