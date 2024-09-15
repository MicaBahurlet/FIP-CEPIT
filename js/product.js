'use strict'

const product = [{
    fig: "images/Dinamite-Doritos.png",
    nameProduct: "Doritos Dinamita",
    price: "62.99",
},
{
    fig: "images/Lindt-Lindor-Milk-Chocolate-Bar.png",
    nameProduct: "Chocolate Lindt Lindor",
    price: "90",
},
{
    fig: "images/Pringles-Ranch.png",
    nameProduct: "Papitas Pringles",
    price: "49.99",
},
{
    fig: "images/Haribo-Berries-Candies.png",
    nameProduct: "Gomitas Haribo",
    price: "54.99",
},
{
    fig: "images/oreo-cookies.png",
    nameProduct: "Galletitas Oreo",
    price: "49.99",
},
{
    fig: "images/Caramel-cookie-Tita.png",
    nameProduct: "Alfajor Tita",
    price: "54.99",
},
];

function createListProduct(product) {
    const productsContainer = document.querySelector('.product-list');

    product.forEach((item) => {
        const img = document.createElement('img');
        img.classList.add('imgProduct');
        img.src = item.fig;
        img.alt = item.nameProduct;

        const h3 = document.createElement('h3');
        h3.classList.add('nameProduct');
        h3.textContent = item.nameProduct;

        const p = document.createElement('p');
        p.classList.add('price');
        p.textContent = `$${item.price}`;

        const buyButton = document.createElement('button');
        buyButton.classList.add('buy-btn');
        buyButton.textContent = 'Comprar';

        const carProductDiv = document.createElement('div');
        carProductDiv.classList.add('car-product');
        carProductDiv.appendChild(img);
        carProductDiv.appendChild(h3);
        carProductDiv.appendChild(p);
        carProductDiv.appendChild(buyButton);
        productsContainer.appendChild(carProductDiv);
    });
}
createListProduct(product);