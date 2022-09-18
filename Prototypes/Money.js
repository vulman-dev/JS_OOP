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
        if (this.currency === 'usd' && newCurrency === 'eur') {
            return new Money(this.value * 0.7, newCurrency);
        }
        if (this.currency === 'eur' && newCurrency === 'usd') {
            return new Money(this.value * 1.2, newCurrency);
        }
    }
    else {
        return new Money(this.value, this.currency);
    }
};

Money.prototype.add = function add(money) {
    if (this.currency !== money.getCurrency()) {
        const newMoney = money.exchangeTo(this.currency).getValue();
        return new Money(this.value + newMoney, this.currency);
    }
    else {
        return new Money(this.value + money.value, this.currency);
    }
};

Money.prototype.format = function format() {
    return this.value.toLocaleString(undefined, { style: 'currency', currency: this.currency});
};