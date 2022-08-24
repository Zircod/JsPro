class Param {
  constructor(element) {
    this.name = element.value;
    this.price = +element.dataset.price;
    this.calories = +element.dataset['calories'];
  }
}

class Burger {
  constructor(size, add, topping) {
    this.size = new Param(this._select(size));
    this.add = new Param(this._select(add));
    this.toppings = this._getToppings(topping);
  }

  _select(name) {
    return document.querySelector(`input[name = "${name}"]:checked`);
  }

  _getToppings(name) {
    let checkToppings = [];
    this._selectAll(name).forEach(el => {
      return checkToppings.push(new Param(el));
    })
    return checkToppings;
  }

  _selectAll(name) {
    return [...document.querySelectorAll(`input[name = "${name}"]:checked`)];
  }

  _calcPrice() {
    let totalPrice = this.size.price + this.add.price;
    this.toppings.forEach(el => totalPrice += el.price);
    return totalPrice;
  }

  _calcCalories() {
    let totalCalories = this.size.calories + this.add.calories;
    this.toppings.forEach(el => totalCalories += el.calories);
    return totalCalories;
  }

  showSum(price, calories) {
    document.querySelector(price).textContent = this._calcPrice();
    document.querySelector(calories).textContent = this._calcCalories();
  }
}
