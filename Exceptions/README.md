# json.js
Реализуйте и экспортируйте функция-обёртку `parseJson()` для функции `JSON.parse()`, которая работает как встроенная. Но в случае если в функцию была передана некорректная *json* строка, функция должна выбросить исключение `ParseError`. Класс `ParseError` реализовывать не нужно, он уже импортирован.

## Пример:
```js
const json = '{ "key": "value" }';
parseJson(json); // { key: 'value' };

const incorrectJson = '{ key": "value" }';
parseJson(incorrectJson); // => ParseError: Invalid JSON string
```