'use strict';

const images = [
    {'id' : '1', 'url':'./imgs/images.webp'},
    {'id' : '2', 'url':'./imgs/85e61c30abfc81b1ed554dabc731363f.jpg'},
    {'id' : '3', 'url':'./imgs/83dd1f1a5230f5635a03248ec0c02f15.jpg'},
    {'id' : '4', 'url':'./imgs/FQ0IT0MXEAkYpI9.jpg'},
    {'id' : '5', 'url':'./imgs/b2800d9948a86b979b87b8e4fdd8e5ea.jpg'},
]

const containerItems = document.querySelector('#container-items');

const loadImages = (images, container ) => {
    images.forEach ( image => {
        container.innerHTML += `
            <div class = 'item'>
                <img src ='${image.url}'>
            </div>
        `         
    })
}

loadImages (images, containerItems );

let items = document.querySelectorAll('.item');

const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}

const next = () => {
    const lastItems = items[items.length - 1];
    containerItems.insertBefore( lastItems, items[0] );
    items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);