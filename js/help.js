var popup = document.querySelector('.lesson-popup');
var texts = [
    '<p>Внимательно ознакомьтесь с текстом задания</p>' +
    '<button class="introjs-button introjs-disabled" disabled>Назад</button>' +
    '<button class="introjs-button" onclick="popup.innerHTML = texts[1];">Далее</button>',

    '<p></p>' +
    '<button class="introjs-button" onclick="popup.innerHTML = texts[0];">Назад</button>' +
    '<button class="introjs-button" onclick="popup.innerHTML = texts[2];">Далее</button>',

    '<p>Нажмите "Проверить", чтобы узнать результат или "Сброс", чтобы начать заново</p>' +
    '<button class="introjs-button" onclick="popup.innerHTML = texts[1];">Назад</button>' +
    '<button class="introjs-button introjs-skipbutton" onclick="popup.classList.add(\'css-hidden\')">Завершить</button>'
];

function scheisse(str) {
    texts[1] = '<p>' + str + '</p>' +
        '<button class="introjs-button" onclick="popup.innerHTML = texts[0];">Назад</button>' +
        '<button class="introjs-button" onclick="popup.innerHTML = texts[2];">Далее</button>';

    popup.innerHTML = texts[0];
    popup.classList.remove('css-hidden');
}