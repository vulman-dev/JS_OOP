function Money(value, currency = 'usd') {
    this.value = value;
    this.currency = currency;
};

Money.prototype.getValue = function getValue() {
    return this.value;
};

Money.prototype.getCurrency = function getCurrency() {
    return this.currency;
};

Money.prototype.exchangeTo = function exchangeTo(newCurrency) {
    if (this.currency !== newCurrency) {
        if (this.currency === 'usd') {
            return new Money(this.value *= 0.7, newCurrency);
        }
        if (this.currency === 'eur') {
            return new Money(this.value *= 1.2, newCurrency);
        }
    }
};

Money.prototype.add = function add(money) {
    if (this.currency !== money.getCurrency()) {
        money.exchangeTo(this.currency);
        return new Money(this.value + money.getValue(), this.currency);
    }
    if (this.currency === money.getCurrency()) {
        return new Money(this.value + money.getValue(), this.currency);
    }
};

Money.prototype.format = function format() {
    return this.value.toLocaleString(undefined, { style: 'currency', currency: this.currency});
};

const money1 = new Money(100);
console.log(money1.getValue());
console.log(money1.getCurrency());
console.log(money1.exchangeTo('eur').getValue());

const money2 = new Money(200, 'eur');
console.log(money2.getValue());

const money3 = money2.add(money1);
console.log(money3);

const money4 = money1.add(money2);
console.log(money4);

console.log(money1.format())
console.log(money2.format());

const money5 = new Money(10000);
console.log(money5.format());