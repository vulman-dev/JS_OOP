# Square.js
Реализуйте и экспортируйте по умолчанию класс `Square` для представления квадрата. У квадрата есть только одно свойство — сторона. Реализуйте метод `getSide()`, возвращающий значение стороны.

## Пример
```js
const square = new Square(10);
square.getSide();
```

# SquaresGenerator.js
Реализуйте класс `SquaresGenerator` со статическим методом `generate()`, принимающий два параметра: сторону и количество экземпляров квадрата (по умолчанию 5 штук), которые нужно создать. Функция должна вернуть массив из квадратов. Экспортируйте класс по умолчанию.

## Пример
```js
const squares = SquaresGenerator.generate(3, 2);
// [new Square(3), new Square(3)];
```