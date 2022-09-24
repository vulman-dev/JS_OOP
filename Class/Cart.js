import _ from 'lodash';

class Cart {
    constructor() {
        this.items = [];
    }

    addItem(item, count) {
        this.items.push({ item, count });
    }

    getItems() {
        return this.items;
    }

    getCost() {
        return _.sumBy(this.items, (items) => items.item.price * items.count);
    }

    getCount() {
        return _.sumBy(this.items, (items) => items.count);
    }
};
