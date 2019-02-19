let poleOsob = [{
        jmeno: 'zajec',
        prijmeni: 'uchac',
        datumnarození: '21.5.2006',
        superschopnost: 'rychle beha',
        fotka: '/assets/images/denis.png',
    },
    {
        jmeno: 'vlk',
        prijmeni: 'nohac',
        datumnarození: '2.5.2016',
        superschopnost: 'rychle ji',
        fotka: '/assets/images/Filip.png',
    },
    {
        jmeno: 'Beran',
        prijmeni: 'bodac',
        datumnarození: '12.5.2016',
        superschopnost: 'silne mlati',
        fotka: '/assets/images/Honza.png',
    },
    {
        jmeno: 'krokodyl',
        prijmeni: 'no',
        datumnarození: '20.5.2006',
        superschopnost: 'soper plavec',
        fotka: '/assets/images/Martin.png',
    },
    {
        jmeno: 'medved',
        prijmeni: 'brunac',
        datumnarození: '11.5.2016',
        superschopnost: 'dlouho spi',
        fotka: '/assets/images/Ondra.png',
    }
]

let medailonek = document.createElement('div');
medailonek.classList.add('container__seznam');

let container__seznam = document.querySelector('#container__img');
container__seznam.appendChild(medailonek);


for (let i = 0; i < poleOsob.length; i++) {
    let medailonek = document.createElement('div');
    medailonek.classList.add('container__seznam');


    let fotoOsoba = document.createElement('img');
    fotoOsoba.classList.add('foto');
    fotoOsoba.src = poleOsob[i].fotka;

    let prijmeniOsoba = document.createElement('h1');
    prijmeniOsoba.classList.add('jmeno');


    let jmenoOsoba = document.createElement('h1');
    jmenoOsoba.classList.add('jmeno');
    jmenoOsoba.textContent = poleOsob[i].jmeno + ' ' + poleOsob[i].prijmeni;


    let datumnarození = document.createElement('p');
    datumnarození.classList.add('vek');
    datumnarození.textContent = poleOsob[i].datumnarození;

    let superschopnost = document.createElement('p');
    superschopnost.classList.add('o-mne');
    superschopnost.textContent = poleOsob[i].superschopnost;

    container__seznam.appendChild(medailonek);


    // medailonek.appendChild(fotoOsoba);
    medailonek.appendChild(jmenoOsoba);
    medailonek.appendChild(prijmeniOsoba);
    medailonek.appendChild(datumnarození);
    medailonek.appendChild(superschopnost);


}

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


