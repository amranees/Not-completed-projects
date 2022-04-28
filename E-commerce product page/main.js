let inner = document.querySelectorAll('.inner');
// Add active clss to nav elements
for (let i = 0; i < inner.length; i++) {
    inner[i].addEventListener('click', function() {
        for (let j = 0; j < inner.length; j++) {
            inner[j].classList.remove('active');
        }
        inner[i].classList.add('active');

    }, false)
}

// Show cart box 
let cart_icon = document.querySelector('.cart-icon');
let cart_box = document.querySelector('.cart-box');


cart_icon.addEventListener('click', () => {
    cart_box.classList.toggle('show');
}, false);

// Up / Down purchase 
let up = document.querySelector('.up');
let purchase_count = document.querySelector('.count');
let down = document.querySelector('.down');

console.log(up)
up.addEventListener('click', () => {
    purchase_count.textContent++;
}, false);

down.addEventListener('click', () => {
    if (purchase_count.textContent > 0) {
        purchase_count.textContent--;
    }
}, false);


// Imgs nav
let all_imgs = document.querySelectorAll('.img');
for (let i = 0; i < all_imgs.length; i++) {
    console.log('here')
    all_imgs[i].addEventListener('click', () => {
        for (let j = 0; j < all_imgs.length; j++) {
            all_imgs[j].classList.remove('active');
        }
        all_imgs[i].classList.add('active');

        // Change thumbnail img
        let thumbnail = document.querySelectorAll('.img.main');
        let img_src = all_imgs[i].querySelector('img').src;
        for (let z = 0; z < thumbnail.length; z++) {
            thumbnail[z].querySelector('img').setAttribute('src', img_src);
        }

        // Navgate among imgs
        let next = document.querySelector('.next');
        let prev = document.querySelector('.previous');
        next.onclick = () => {
            try {
                all_imgs[i].nextElementSibling.click();
                // console.log('hi')
                // console.log('bad')
            } catch (error) {
                all_imgs[0].click();
                console.log('err')
            }
        }

        prev.onclick = () => {
            try {
                all_imgs[i].previousElementSibling.click();
                // console.log('hi')
                // console.log('bad')
            } catch (error) {
                all_imgs[all_imgs.length - 1].click();
                console.log('err')
            }
        }


    }, false)

}
// Open overlay window 

let thumbnail = document.querySelector('.img.main');
let imgs_section_clone = document.querySelector('.imgs-section.clone');
thumbnail.addEventListener('click', () => {
    imgs_section_clone.style.display = "flex";
}, false)


// Close overlay window
let close_overlay = document.querySelector('.imgs-section.clone .close');
close_overlay.addEventListener('click', () => {
    imgs_section_clone.style.display = "none";
}, false)

// add to cart 
let add_button = document.querySelector('.add-toCart');
add_button.onclick = () => {
    if (purchase_count.textContent > 0) {
        let cart_content = document.querySelector('.cart-content');
        if (cart_content.querySelector('.my-purchase')) {
            cart_content.querySelector('.my-purchase').remove();
        }


        let my_purchase = document.createElement('div');
        my_purchase.classList.add('my-purchase');
        let title = document.querySelector('.title').textContent;
        let product_info = document.createElement('div');
        product_info.classList.add('product-info');

        let orgImg = document.querySelector('.img img');
        let img = orgImg.cloneNode(false);
        product_info.append(img);
        let txt = document.createElement('div');
        txt.classList.add('txt');

        let product_title = document.createElement('div');
        product_title.classList.add('product-title');
        product_title.append(title);
        txt.append(product_title);

        let product_price = document.createElement('div');
        product_price.classList.add('product_price');
        txt.append(product_price);
        let bought = document.querySelector('.current-price').textContent;

        product_price.innerHTML = (`${bought} * ${purchase_count.textContent} <span style='font-weight: bold;
         color: var(--black);
         margin-left: 5px;
         '>$${purchase_count.textContent * 125}.00 </span>`);

        product_info.append(txt);

        let delete_product = document.createElement('img');
        delete_product.setAttribute('src', './images/icon-delete.svg');
        product_info.append(delete_product);
        my_purchase.append(product_info);

        let check_out = document.createElement('div');
        check_out.classList.add('check-out');
        check_out.append('Check Out');
        my_purchase.append(check_out);

        cart_content.append(my_purchase);

        // Check Out product
        check_out.onclick = () => {
            cart_icon.click();
            thumbnail.click();
        }

        // Delete Product
        delete_product.onclick = () => {
            let delete_product_grandParent = delete_product.parentElement.parentElement;
            delete_product_grandParent.style.transform = 'translate(-110%)';
            setTimeout(() => {

                delete_product_grandParent.remove();
            }, 500);

        }
    }
}

let menu = document.querySelector('.menu');
let orgNav = document.querySelector('nav');
let nav = orgNav.cloneNode(true);
let nav_slide = document.querySelector('.nav-slide');
nav_slide.classList.add('nav-slide');


menu.onclick = () => {
    nav_slide.classList.toggle('active');
    nav.style.cssText = `
        display: flex;
        flex-dirction: column;
    `;
    nav_slide.append(nav);

    if (nav_slide.classList.contains('active')) {

        menu.setAttribute('src', './images/icon-close.svg')
    } else {
        menu.setAttribute('src', './images/icon-menu.svg')
    }
}