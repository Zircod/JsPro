class ProductList {
  constructor(container= '.products') {
    this.container = container;
    this.goods =[];
    this._fetchProducts();
    this.render();

  }

  _fetchProducts() {
    this.goods = [
      {id: 1, title: 'Notebook', price: 2000},
      {id: 2, title: 'Mouse', price: 20},
      {id: 3, title: 'Keyboard', price: 200},
      {id: 4, title: 'Gamepad', price: 50},
    ];
  }

  render() {
    document.querySelector('.products').innerHTML = this.goods.map(item => {
      const goodItem = new ProductItem(item);
      return goodItem.render();
    }).join('');
  }

  calcSum() {
    return this.goods.reduce((accum, item ) => accum + item.price, 0)
  }

}

class ProductItem {
  constructor(product, img= 'https://i.ibb.co/bvjZbP9/black-friday-elements-assortment.jpg') {
    this.title = product.title;
    this.id = product.id;
    this.price = product.price;
    this.img = img;
  }

  render() {
    return`<div class="product-item">
              <img src="${this.img}" alt="img">
              <h3>${this.title}</h3>
              <p>${this.price}</p>
              <button class="buy-btn">Купить</button>
            </div>
    `;
  }
}

const list = new ProductList();
console.log(list.calcSum());

class Basket {
  getTotalCount(){

  }
  getTotalPrice(){

  }
  addToCard() {

  }
  renderProductInBasket() {

  }
}

class ItemInBasket {
  renderNewProductInBasket() {

  }
}