# Random.js
Реализуйте генератор случайных чисел, представленный классом `Random`. Интерфейс объекта включает в себе три функции:

* Конструктор. Принимает на вход *seed*, начальное число генератора псевдослучайных чисел.
* `getNext()` — метод, возвращающий новое случайное число.
* `reset()` — метод, сбрасывающий генератор на начальное значение

Экспортируйте класс по умолчанию.

## Примеры
```js
const seq = new Random(100);
const result1 = seq.getNext();
const result2 = seq.getNext();

result1 !== result2; // true

seq.reset();

const result21 = seq.getNext();
const result22 = seq.getNext();

result1 === result21; // true
result2 === result22; // true
```

## Подсказки
* Простейший способ реализовать случайные числа — [линейный конгруэнтный метод](https://ru.wikipedia.org/wiki/Линейный_конгруэнтный_метод).