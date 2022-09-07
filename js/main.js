const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
  el: '#app',
  data: {
    userSearch: '',
    showCart: false,
    catalogUrl: '/catalogData.json',
    cartUrl: '/getBasket.json',
    cartItems: [],
    filtered: [],
    imgCart: 'https://via.placeholder.com/50x100',
    products: [],
    imgProduct: 'https://via.placeholder.com/200x150'
  },
  methods: {
    getJson(url){
      return fetch(url)
      .then(result => result.json())
      .catch(error => console.log(error))
    },

    filter(){
      let regexp = new RegExp(this.userSearch, 'i');
      this.filtered =  this.products.filter(el => regexp.test(el.product_name));
    }
  },

  mounted(){
    this.getJson(`${API + this.cartUrl}`)
    .then(data => {
      for (let item of data.contents){
        this.cartItems.push(item);
      }
    });
    this.getJson(`${API + this.catalogUrl}`)
    .then(data => {
      for (let item of data){
        this.data.products.push(item);
        this.data.filtered.push(item);
      }
    });
    this.getJson(`getProducts.json`)
    .then(data => {
      for(let item of data){
        this.products.push(item);
        this.filtered.push(item);
      }
    })
  }

});

// class ProductList {
//   constructor(container= '.products', url = '/catalogData.json') {
//     this.container = container;
//     this.url = url;
//     this.goods =[];
//     this.init();
//     this.getProducts()
//       .then(data => {
//         this.goods = data;
//         console.log(data);
//         this.render();
//       })
//
//   }
//
//   getProducts() {
//     return fetch(`${API + this.url}`)
//       .then(result => result.json())
//       .catch(error => {
//         console.log(error);
//       });
//   }
//
//   render() {
//     document.querySelector(this.container).innerHTML = this.goods.map(item => {
//       const goodItem = new ProductItem(item);
//       return goodItem.render();
//     }).join('');
//   }
//
//   calcSum() {
//     return this.goods.reduce((accum, item ) => accum + item.price, 0)
//   }
//
//   init() {
//   //  return false;
//   }
// }
//
// class ProductItem {
//   constructor(product, img= 'https://i.ibb.co/bvjZbP9/black-friday-elements-assortment.jpg') {
//     this.title = product.product_name;
//     this.id = product.id_product;
//     this.price = product.price;
//     this.img = img;
//   }
//
//   render() {
//     return`<div class="product-item" data-id="${this.id}">
//               <img src="${this.img}" alt="img">
//               <h3>${this.title}</h3>
//               <p>${this.price}</p>
//               <button class="buy-btn btn">Купить</button>
//             </div>
//     `;
//   }
// }
//
// class Basket extends ProductList {
//   constructor(container= '.basket', url='/getBasket.json') {
//     super(container, url)
//     this.item = [];
//     this.getProducts()
//       .then(data => {
//         this.item = data.contents;
//         console.log(data);
//         this.render();
//       })
//   }
//
//   render() {
//     document.querySelector(this.container).innerHTML = this.item.map(item => {
//       const basketItem = new ItemInBasket(item);
//       return basketItem.render();
//     }).join('');
//   }
//
//   init() {
//     document.querySelector('.btn-cart').addEventListener('click', () => {
//       document.querySelector(this.container).classList.toggle('basket-active');
//     });
//   }
// }
//
// class ItemInBasket extends ProductItem {
//   constructor(product) {
//     super(product)
//     this.quantity = product.quantity;
//   }
//
//   render() {
//     return `
//       <div class="basket-item" data-id="${this.id}">
//         <p>${this.title}</p>
//         <p>${this.price} $ за 1шт.</p>
//         <p>${this.quantity} шт.</p>
//         <div class="bnt-wrp">
//             <button class="delete-btn btn" data-id="${this.id_product}">x</button>
//         </div>
//       </div>
//
//     `
//   }
// }
//
// const list = new ProductList();
// let products = new Basket();
// //console.log(list.calcSum());
//
//
