/////Объявляем клас гамбургер
class Burger {

    price = 0;
    calories = 0;
    constructor(price, calories) {
        this.price = price;
        this.calories = calories;
    }
    /////добовляем метод соус
    addSause(sauses) {
        let value = sauses[sause];

        this.price += value.price;
        this.calories += value.calories;

    }
    ////удаление соуса
    removeSause() {
        let value = sauses[sause];

        this.price -= value.price;
        this.calories -= value.calories;
    }
    /////получение цены
    getPrice() {
        return this.price;
    }
    static sause = {
        [SAUCE_MAYO]: {
            price: 5,
            calories: 30
        },
        [SAUCE_MUSTARD]: {
            price: 5,
            calories: 35
        }
    };

    static SIZE_SMALL = 'SIZE_SMALL';
    static SIZE_BIG = 'SIZE_BIG';
    static SAUCE_MAYO = 'SAUCE_MAYO';
    static SAUCE_MUSTARD = 'SAUCE_MUSTARD';
};

class Hamburger extends Burger {
    constructor(size) {
        let value = Sizes[size];
        if (!value) { throw 'unknow size' };
        super(value.price, value.calories);
    };
    static Sizes = {
        [SIZE_SMALL]: {
            price: 30,
            calories: 200
        },
        [SIZE_BIG]: {
            price: 50,
            calories: 320
        }

    };

}
class Сheeseburger extends Burger {
    constructor(size) {
        let value = Sizes[size];
        if (!value) { throw 'unknow size' };
        super(value.price, value.calories);
    };
    static Sizes = {
        [SIZE_SMALL]: {
            price: 40,
            calories: 250
        },
        [SIZE_BIG]: {
            price: 70,
            calories: 400
        }

    };
    static sause = {
        [SAUCE_TARTAR]: {
            price: 5,
            calories: 35
        }
    };
    addSause(sauses) {
        let value = sauses[sause];

        this.price += value.price;
        this.calories += value.calories;

    }
    static SAUCE_TARTAR = 'SAUCE_TARTAR';


}
////объявляем необходимые объекты


/////выполнение необходимых условий
const burger1 = new Hamburger(Hamburger.SIZE_SMALL);
burger1.addSauce(Hamburger.SAUCE_MAYO);
burger1.addSauce(Hamburger.SAUCE_MUSTARD);

burger1.getPrice() // -> 40

burger1.removeSauce(Hamburger.SAUCE_MAYO);

burger1.getPrice() // -> 35
burger1.getCalories() // -> 235

const burger2 = new Сheeseburger(Сheeseburger.SIZE_BIG);
burger2.addSauce(Сheeseburger.SAUCE_TARTAR);

burger2.getPrice() // -> 77
burger2.getCalories()
