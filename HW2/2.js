"use strict";

/*
###Задание 2
Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут 
оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные 
сообщения, вы решаете установить ограничение, отзыв должен быть не менее 50 
символов в длину и не более 500. В случае неверной длины, необходимо выводить 
сообщение об ошибке, рядом с полем для ввода.

Создайте HTML-структуру. 
На странице должны отображаться товары, под каждым товаром должен быть список 
отзывов на данный товар. Под каждым списком отзывов должна быть форма, где можно
добавить отзыв для продукта.

При добавлении отзыва, он должен отображаться на странице под предыдущими 
отзывами, а не заменять их.
Массив initialData должен использоваться для начальной загрузки данных 
при запуске вашего приложения.

Каждый отзыв, как и продукт, должен иметь уникальное id, для упрощения, используем 
`Date.now()`.

ВНИМАНИЕ! Если вы не проходили на курсе работу с DOM, то можно это задание не 
делать, пока рано.
*/

const initialData = [
    {
        id: Date.now(),
        product: "Apple iPhone 13",
        reviews: [
            {
                id: Date.now(),
                text: "Отличный телефон! Батарея держится долго.",
            },
            {
                id: Date.now(),
                text: "Камера супер, фото выглядят просто потрясающе.",
            },
        ],
    },
    {
        id: Date.now(),
        product: "Samsung Galaxy Z Fold 3",
        reviews: [
            {
                id: Date.now(),
                text: "Интересный дизайн, но дорогой.",
            },
        ],
    },
    {
        id: Date.now(),
        product: "Sony PlayStation 5",
        reviews: [
            {
                id: Date.now(),
                text: "Люблю играть на PS5, графика на высоте.",
            },
        ],
    },
];



initialData.forEach(element => {

    let idProduct = 0;
    
    const container = document.createElement("div");
    container.id = "container";
    document.body.appendChild(container);

    // Описание продукта
    const product = document.createElement("div");
    product.id = "product";
    container.appendChild(product);
    product.textContent += element.product;
    
    // Отзывы
    const reviews = document.createElement("div");
    reviews.id = "reviews";
    container.appendChild(reviews);
    element.reviews.forEach(element => {
        idProduct = element.id;
        reviews.innerHTML += `<li>${element.text}</li>`;
    })

    // Поле ввода отзыва
    const inputText = document.createElement("div");
    inputText.id = "inputText";
    container.appendChild(inputText);
    const message = document.createElement("textarea");
    inputText.appendChild(message);
    const btn = document.createElement("button");
    btn.textContent = "Отправить";
    btn.addEventListener("click", () => {
        if (message.value.length >= 50 && message.value.length <= 500) {
            reviews.innerHTML += `<li>${message.value}</li>`;
            message.value = " ";
            errorMessage.textContent = " ";
        } else {
            errorMessage.textContent = "Комментарий должен быть длинной не менее 50 и не более 500 символов";
        }
    });
    inputText.appendChild(btn);
    const errorMessage = document.createElement("p");
    errorMessage.style.color = "RED";
    inputText.appendChild(errorMessage);

})
