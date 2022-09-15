function callback () {
    this.name = this.name.split('').reverse().join('');
};

const objects = [
    { name: 'Karl' },
    { name: 'Mia' },
];

const each = (objectCollection, callbackFunction) => objectCollection.forEach((object) => callbackFunction.call(object));

console.log(each(objects, callback));