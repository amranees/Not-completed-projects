function convert(num, type) {
    let resulte;
    if (type === 's') {
        resulte = num * 1000;
    } else if (type === 'm') {
        resulte = num * 60 * 1000;
    } else if (type === 'h') {
        resulte = num * 60 * 60 * 1000;
    }

    return resulte;
}



function time() {
    let sec = document.querySelector('.sec');
    let min = document.querySelector('.min');
    let hour = document.querySelector('.hour');
    // let day = document.querySelector('.day');

    // Min
    setInterval(() => {
        hour.textContent--;
        min.textContent = 60;
    }, convert(1, 'h'));

    setInterval(() => {
        parseInt(min.textContent--);
        sec.textContent = 60;
    }, convert(1, 'm'))

    // Sec

    setInterval(() => {
        sec.textContent--
    }, convert(1, 's'))


    // if (2 > 1) {
    //     console.log('greater');
    // } else {
    //     console.log(sec.textContent.length)
    // }
}

time();