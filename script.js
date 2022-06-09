'use strict'
//переменные для работы
let textColor;
const btn = document.querySelector('#btn');
const inputText = document.querySelector('#text');
const inputRange = document.querySelector('#range');
const square = document.querySelector('#square');
const btnInCircle = document.querySelector('#e_btn');
const circle = document.querySelector('#circle');

//определение функций для задания цвета квадрата
const getTextColor = function () {
    textColor = inputText.value;
}

const isColor = function () {
    alert('Введите любой доступный цвет: red, green, blue или другой.');
}

const changeColorSquare = function () {
    square.style.backgroundColor = textColor;
    inputText.value = '';
}

//определение функции чтобы скрыть кнопку в кружке
const noneBtnInCircle = function (event) {
    event.target.style = 'display: none';
}

//определение функций для управления размером круга внутри квадрата
const changeSizeCircle = function (event) {
    let koeffCircle;
    let h = 150;
    let w = 150;
    //делаем размер 100% (150 px) для input range в положении 0.
    //уменьшение на 1 input range означает уменьшение на 2% размера 150px и наоборот 
    koeffCircle  = event.target.value * 2 * 0.005;
    h = h * koeffCircle;
    w = w * koeffCircle;
    h = String(h) + 'px';
    w = String(w) + 'px';
    //запись новой ширины и высоты circle
    circle.style.width = w;
    circle.style.height= h;
}

//запуск функций для смены цвета квадрата
inputText.addEventListener('input', getTextColor);
inputText.addEventListener('click', isColor);
btn.addEventListener('click', changeColorSquare);
//запуск слушателя скрытия кнопки ЖМЯК
btnInCircle.addEventListener('click', noneBtnInCircle);
//запуск функций для управления размером круга внутри квадрата
inputRange.addEventListener('input', changeSizeCircle);
