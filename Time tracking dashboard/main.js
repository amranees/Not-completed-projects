function active(ele) {
    let categs = document.querySelectorAll('.categ');
    for (let i = 0; i < categs.length; i++) {
        categs[i].classList.remove('active');
    }

    ele.classList.add('active')
}


let card_title = document.querySelectorAll('.title');
let current_state = document.querySelectorAll('.current');
let previous_state = document.querySelectorAll('.previous');

async function cardTitle() {

    // title
    document.querySelector("body > div > div.main-card > nav > span.weekly.categ").click();
    let data = await (await fetch('./data.json')).json();
    for (let i = 0; i < card_title.length; i++) {
        card_title[i].textContent = await data[i].title

    }
    for (let i = 0; i < current_state.length; i++) {

        // Daily
        let daily = document.querySelector('.daily');
        setTimeout(() => {
            daily.click();
        }, 10)

        daily.addEventListener('click', function() {
            active(daily) // Add class active
            current_state[i].textContent = `${data[i].timeframes.daily.current}hrs`;
            previous_state[i].textContent = `${data[i].timeframes.daily.previous}hrs`;
        }, false);


        // Weakly
        let weekly = document.querySelector('.weekly');
        weekly.addEventListener('click', function() {
            active(weekly) // Add class active
            current_state[i].textContent = `${data[i].timeframes.weekly.current}hrs`;
            previous_state[i].textContent = `${data[i].timeframes.weekly.previous}hrs`;
        }, false);

        // Monthly
        let monthly = document.querySelector('.monthly');
        monthly.addEventListener('click', function() {
            active(monthly) // Add class active
            current_state[i].textContent = `${data[i].timeframes.monthly.current}hrs`;
            previous_state[i].textContent = `${data[i].timeframes.monthly.previous}hrs`;
        }, false)
    }
}

cardTitle();