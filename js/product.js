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
    fig: "images/images/Pringles-Ranch.png",
    nameProduct: "Café Bonafide",
    price: "49.99",
    stock: "11",
},
{
    fig: "images/images/Haribo-Berries-Candies.png",
    nameProduct: "Mermelada de ciruela Arcor",
    price: "54.99",
    stock: "11",
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

        const carProductDiv = document.createElement('div');
        carProductDiv.classList.add('car-product');
        carProductDiv.appendChild(img);
        carProductDiv.appendChild(h3);
        carProductDiv.appendChild(p);
        productsContainer.appendChild(carProductDiv);
    });
}