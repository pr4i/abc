// script.js

// Функция вывода сообщения в консоль
function showMessage(message) {
    console.log(message);
}

// Функция изменения цвета фона
function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

// Функция переключения видимости элемента
function toggleVisibility(selector) {
    const element = document.querySelector(selector);
    if (element) {
        const currentDisplay = getComputedStyle(element).display;
        element.style.display = currentDisplay === 'none' ? 'block' : 'none';
    }
}

// Функция обработки параметра utm_term
function handleUtmTerm() {
    const params = new URLSearchParams(window.location.search);
    const utmTerm = params.get('utm_term');
    const h1 = document.querySelector('h1');
    if (h1) {
        h1.textContent = utmTerm ? utmTerm : h1.textContent;
    }
}

// Функция логирования текущего времени
function logCurrentTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('ru-RU', { hour12: false });
    console.log(`Текущее время: ${timeString}`);
}

// Функция сброса цвета фона
function resetBackgroundColor() {
    document.body.style.backgroundColor = 'white';
}

// Вызовы функций
showMessage("Скрипт загружен!");
logCurrentTime();

document.addEventListener('DOMContentLoaded', () => {
    resetBackgroundColor();
    changeBackgroundColor("lightblue");
    toggleVisibility(".content");
    handleUtmTerm();
});
