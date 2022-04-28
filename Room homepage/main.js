let menu = document.querySelector('.menu');
let nav = document.querySelector('nav.mobile');
let close = document.querySelector('.close');

menu.onclick = () => {
    nav.style.display = 'flex';
}

close.onclick = () => {
    nav.style.display = 'none';
}

// Navigating
let count = 1;
let prev = document.querySelector('.left-arrow');
let next = document.querySelector('.right-arrow');


function change() {
    let section_1 = document.querySelector('.section-1');
    let title = document.querySelector('.section-2 h1');
    let paragraph = title.nextElementSibling;

    if (count === 1) {
        section_1.style.background = "url(./images/desktop-image-hero-1.jpg)";
        title.textContent = 'ABOUT OUR FURNITURE';
        paragraph.textContent = 'Home Shop About Contact Discover innovative ways to decorate We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.'


    } else if (count === 2) {
        section_1.style.background = "url(./images/desktop-image-hero-2.jpg)";
        title.textContent = 'We are available all across the golbe';
        paragraph.textContent = "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.";
    } else if (count === 3) {
        section_1.style.background = "url(./images/desktop-image-hero-3.jpg)";
        title.textContent = 'Manufatured with the best meterials';
        paragraph.textContent = 'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.'
    }
    section_1.style.backgroundSize = 'cover'
}

next.onclick = () => {
    if (count <= 2) {
        count++
        change();
        console.log(count)

    }
}

prev.onclick = () => {
    if (count >= 2) {
        count--;
        change();
        console.log(count)

    }
}

window.addEventListener('keydown', (e) => {
    if (e.keyCode === 39) {
        if (count <= 2) {
            count++
            change();
        }
    } else if (e.keyCode === 37) {
        if (count >= 2) {
            count--;
            change();
            console.log(count)

        }
    }
}, false)