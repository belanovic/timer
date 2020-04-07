let vremenaTabovi = document.querySelectorAll('div.opcija');
let vremeUnos = document.querySelector('input.opcija.unos');
let tajmer = document.querySelector('.tajmer span');
let vremePovratka = document.querySelector('.vremePovratka');

vremenaTabovi.forEach(prom => prom.addEventListener('click', timer));
vremeUnos.addEventListener('input', timer);

function timer() {
    let count = 60 * parseInt(this.dataset.minuti || this.value) || 0;
    const rokMilisec = Date.now() + count*1000;
    const rok = new Date(rokMilisec);
    vremePovratka.innerHTML = rok.toLocaleTimeString('sr-SR');
    function minsSecs(c) {
        let mins = Math.floor(c / 60);
        let secs = c % 60;
        if (mins < 10) mins = '0' + mins;
        if (secs < 10) secs = '0' + secs;
        tajmer.innerHTML = mins + ' : ' + secs;
    }
    minsSecs(count);
    let element = this;
    document.querySelectorAll('.opcija').forEach(function (prom) {
        if (prom.interval) {
            clearInterval(prom.interval);
        }
    })
    element.interval = setInterval(function () {
        count--;
        minsSecs(count);
        if (count === 0) clearInterval(element.interval);
    }, 1000);
}