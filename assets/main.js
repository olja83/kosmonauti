function zobrazJmena() {
    let seznam = document.querySelector('#container__seznam');
    const hledani = document.querySelector('#jmeno');
    let obsah = '';
    let hledaneJmeno = hledani.value;
    for (let i = 0; i < poleOsob.length; i++) {

        if (hledaneJmeno !== '' && poleOsob[i].jmeno.toLowerCase().startsWith(hledaneJmeno.toLowerCase())) {

            obsah += '<li class="vybrana">' + poleOsob[i].jmeno + ' ' + poleOsob[i].prijmeni + '<br> ' + poleOsob[i].datumnarození + '<br> ' + poleOsob[i].superschopnost + '</li>';

        }

    }
    seznam.innerHTML = obsah;

}