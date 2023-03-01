// Масив об'єктів із зображеннями та описом
const images = [
    {
        src: 'static/images/image1.png',
        alt: 'Товар 1',
        description: 'Насіння кінзи Seedra для посадки в приміщенні та на відкритому повітрі',
        price: '12.69$'
    },

    {
        src: 'static/images/image1.png',
        alt: 'Товар 2',
        description: 'Насіння кінзи Seedra для посадки в приміщенні та на відкритому повітрі',
        price: '12.69$'
    },

    {
        src: 'static/images/image2.png',
        alt: 'Товар 3',
        description: 'Кукурудза SEEDRA - гібридне насіння Bodacious для внутрішнього саду',
        price: '12.69$'
    },

    {
        src: 'static/images/image2.png',
        alt: 'Товар 4',
        description: 'Кукурудза SEEDRA - гібридне насіння Bodacious для внутрішнього саду',
        price: '12.69$'
    },

    {
        src: 'static/images/image3.png',
        alt: 'Товар 5',
        description: 'Насіння шпинату SEEDRA для внутрішнього та відкритого саду',
        price: '12.69$'
    },

    {
        src: 'static/images/image3.png',
        alt: 'Товар 6',
        description: 'Насіння шпинату SEEDRA для внутрішнього та відкритого саду',
        price: '12.69$'
    }
];

const imagesContainer = document.getElementById('images-container');
const showImagesBtn = document.getElementById('show-images-btn');

// Функція для додавання зображення та опису до контейнеру
function addImageToContainer(image) {
    const imageCol = document.createElement('div');
    imageCol.classList.add('col-md-4', 'my-5');

    const img = document.createElement('img');
    img.src = image.src;
    img.alt = image.alt;
    img.classList.add('w-100');

    const description = document.createElement('h10');
    description.textContent = image.description;
    description.classList.add('d-none');

    const buy = document.createElement('button');
    buy.innerHTML = 'Купити зараз';
    buy.classList.add("btn");
    buy.classList.add("btn-success");

    const price = document.createElement('h5');
    price.innerHTML = image.price;

    imageCol.appendChild(img);
    imageCol.appendChild(description);
    imageCol.appendChild(price);
    imageCol.appendChild(buy);
    imagesContainer.appendChild(imageCol);

    // Додамо обробник події на клік для опису
    description.addEventListener('click', function () {
        description.classList.toggle('d-none');
    });

    // Додамо обробник події на клік для зображення
    img.addEventListener('click', function () {
        description.classList.toggle('d-none');
    });

    buy.addEventListener('click', function () {
        alert('Товар додано в корзину!');
    });
}

// Додамо обробник події на клік для кнопки
showImagesBtn.addEventListener('click', function () {
    // Приховуємо кнопку
    showImagesBtn.classList.add('d-none');

    // Додаємо кожне зображення до контейнеру
    images.forEach(function (image) {
        addImageToContainer(image);
    });
});