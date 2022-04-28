// Change Theme
let change_theme_box = document.querySelector('.change-theme-box');
let theme_ball = document.querySelector('.theme-ball');

let count = 0;
let root = document.querySelector(':root');

theme_ball.onclick = () => {
    if (count == 0) {
        change_theme_box.style.justifyContent = 'center';
        count++;
        let theme = document.querySelector('head #theme');
        theme.href = './themes/white.css';

    } else if (count === 1) {
        change_theme_box.style.justifyContent = 'end';
        theme.href = './themes/purple.css';
        count++;
    } else if (count === 2) {
        change_theme_box.style.justifyContent = 'start';
        theme.href = '';
        count = 0;
    }
}

// Board

let button = document.querySelectorAll('.button');
let resulte_container = document.querySelector('.resulte-container');
let equal_sign = document.querySelector('.equal-sign');

let clear_resulte = true;

function clear(resulte_container, reset = false) {
    if (resulte_container.textContent.length === 1) {
        resulte_container.textContent = 0;
    }

    if (reset) {
        resulte_container.textContent = 0;
    }
    clear_resulte = true;
}

// Click on button
// if (resulte_container.textContent === '') {
//     resulte_container.textContent = 0;
// }

for (let i = 0; i < button.length; i++) {
    button[i].onclick = () => {
        if (clear_resulte) {
            resulte_container.textContent = '';
            clear_resulte = false;
        }
        let currentNum = button[i].textContent
        resulte_container.textContent += currentNum;



    }
}

// Delete last num
let del = document.querySelector('.del');
del.onclick = () => {

    let last = resulte_container.textContent.substring(0, resulte_container.textContent.length - 1);
    if (resulte_container.textContent.length === 1) {
        clear(resulte_container);
    } else {
        resulte_container.textContent = last;
    }
}

// Reset
let reset = document.querySelector('.reset');
reset.onclick = () => {
    clear(resulte_container, true);
}


// print final resulte
equal_sign.onclick = () => {
    let signs = ['+', '-', 'x', '/'];
    let final;
    let calculate = split(resulte_container.textContent, signs);
    let count = 0;
    // claculate `acc` with `curr`
    calculate.nums.reduce((acc, curr) => {
        console.log('hi');
        if (curr === '') {
            final = parseFloat(acc) + parseFloat(acc);
            return final;
        } else {
            // I did'nt use `map` function cause `count` will set to `0` when it quit from the `map` function
            // check the signs and calculate
            for (count; count < calculate.curr_signs.length;) {
                if (calculate.curr_signs[count] === '+') {
                    final = parseFloat(acc) + parseFloat(curr);

                } else if (calculate.curr_signs[count] === '-') {
                    final = parseFloat(acc) - parseFloat(curr);

                } else if (calculate.curr_signs[count] === 'x') {
                    final = parseFloat(acc) * parseFloat(curr);
                } else if (calculate.curr_signs[count] === '/') {
                    final = parseFloat(acc) / parseFloat(curr);
                }

                count++;
                // quit from the loop so will check the signs from begaining every time
                break;
            }

        }

        return final;
    });
    resulte_container.textContent = final;

}

// I create my own `split` function
// so now I can pass array to `split`;
function split(str, signs) {
    let curr_signs = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < signs.length; j++) {
            if (str[i] === signs[j]) {
                str = str.replace(str[i], ',');
                curr_signs.push(signs[j]);
                break;
            }
        }
    }

    // I need to return more than one
    // So I returned an obj
    return {
        nums: str.split(','),
        curr_signs: curr_signs,
    };
}