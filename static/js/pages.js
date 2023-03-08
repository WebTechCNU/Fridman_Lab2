// Масив об'єктів із зображеннями та описом
const images = [
    {
        src: 'static/images/image1.png',
        alt: 'Товар 1',
        description: 'Насіння кінзи Seedra для посадки в приміщенні та на відкритому повітрі',
        price: '12.69$',
        classname: 'bundles'
    },

    {
        src: 'static/images/image1.png',
        alt: 'Товар 2',
        description: 'Насіння кінзи Seedra для посадки в приміщенні та на відкритому повітрі',
        price: '12.69$',
        classname: 'herbs'
    },

    {
        src: 'static/images/image2.png',
        alt: 'Товар 3',
        description: 'Кукурудза SEEDRA - гібридне насіння Bodacious для внутрішнього саду',
        price: '12.69$',
        classname: 'vegetables'
    },

    {
        src: 'static/images/image2.png',
        alt: 'Товар 4',
        description: 'Кукурудза SEEDRA - гібридне насіння Bodacious для внутрішнього саду',
        price: '12.69$',
        classname: 'bundles'
    },

    {
        src: 'static/images/image3.png',
        alt: 'Товар 5',
        description: 'Насіння шпинату SEEDRA для внутрішнього та відкритого саду',
        price: '12.69$',
        classname: 'vegetables'
    },

    {
        src: 'static/images/image3.png',
        alt: 'Товар 6',
        description: 'Насіння шпинату SEEDRA для внутрішнього та відкритого саду',
        price: '12.69$',
        classname: 'herbs'
    }
];

const imagesContainer = document.getElementById('images-container');
const showImagesBtn = document.getElementById('show-images-btn');

// Функція для додавання зображення та опису до контейнеру
function addImageToContainer(image) {
    const imageCol = document.createElement('div');
    imageCol.classList.add('col-md-4', 'my-5', 'float-left', 'box');
    imageCol.classList.add(image.classname);

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


setTimeout(function () {
    // Перевірка, чи користувач вже підписаний на повідомлення
    if (localStorage.getItem('subscribed') !== 'true') {
        // Показуємо вікно
        var subscribeModal = new bootstrap.Modal(document.getElementById('subscribeModal'));
        subscribeModal.show();
        // Додаємо обробник події на кнопку "Підписатися"
        document.getElementById('subscribeButton').addEventListener('click', function () {
            // Зберігаємо інформацію про підписку у локальному сховищі
            localStorage.setItem('subscribed', 'true');
            // Ховаємо вікно
            subscribeModal.hide();
            // Показуємо повідомлення про подяку за підписку
            alert('Дякуємо за підписку!');
        });
    }
}, 10000);

// Фільтрація товару



document.querySelector('nav.midlbuttom').addEventListener('click', (event)=>{
   if (event.target.tagName !== 'LI') return false;

   let filterClass = event.target.dataset['f'];

   let filterProducts = document.querySelectorAll('.box');

   Array.from(filterProducts).forEach(elem => {
       elem.classList.remove('hide');
        if (!elem.classList.contains(filterClass) && filterClass !== 'all'){
            elem.classList.add('hide');
        }
   });
});



const modal = document.getElementById('modal');
const modalContent = document.getElementById('modal-content');
const closeBtn = document.getElementById('close-btn');
const timer = document.getElementById('timer');

// Показуємо модальне вікно після певного часу перебування на сторінці
setTimeout(function() {
    modal.style.display = 'block';
}, 5000);

// Змінюємо текст таймера кожну секунду
let count = 10;
const interval = setInterval(function() {
    count--;
    if (count >= 0) {
        timer.innerHTML = 'Зачекайте ' + count + ' секунд, щоб закрити рекламу';
    } else {
        clearInterval(interval);
        timer.innerHTML = 'Ви можете закрити рекламу';
        closeBtn.classList.add('active');
    }
}, 1000);

// Закриваємо модальне вікно при кліку на кнопку закриття
closeBtn.addEventListener('click', function() {
    if (closeBtn.classList.contains('active')) {
        modal.style.display = 'none';
    }
});

