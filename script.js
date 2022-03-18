'use strict';
//estrutura de carregamento dinamico com json
const images = [
    {'id':'1','url':'./assets/Bootstrap.png'},
    {'id':'2','url':'./assets/css.png'},
    {'id':'3','url':'./assets/Firebase.png'},
    {'id':'4','url':'./assets/html.png'},
    {'id':'5','url':'./assets/React.png'},
    {'id':'6','url':'./assets/jquery.png'},
    {'id':'7','url':'./assets/js.png'},
    {'id':'8','url':'./assets/mongo.png'},
    {'id':'9','url':'./assets/NodeJS.png'}
]

const containerItems = document.querySelector('#container-items');

const loadImages = (images, container) => {
    images.forEach(image => {
        container.innerHTML +=
        `<div class='item'>
        <img src ='${image.url}'
        </div>`
    });
}

loadImages(images,containerItems);
let items = document.querySelectorAll('.item');

const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}
const next = ()=>{
    containerItems.insertBefore(items[items.length-1],items[0]);
    items = document.querySelectorAll('.item');

}

document.querySelector('#previous').addEventListener('click',previous);
document.querySelector('#next').addEventListener('click',next);
