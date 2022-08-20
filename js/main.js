const products = [
  {id: 1, title: 'Notebook', price: 2000},
  {id: 2, title: 'Mouse', price: 20},
  {id: 3, title: 'Keyboard', price: 200},
  {id: 4, title: 'Gamepad', price: 50},
];

const renderProduct = (obj, img= 'https://i.ibb.co/bvjZbP9/black-friday-elements-assortment.jpg') => {
  return`<div class="product-item">
            <img src="${img}" alt="img">
            <h3>${obj.title}</h3>
            <p>${obj.price}</p>
            <button class="buy-btn">Купить</button>
          </div>
  `;
};

const renderPage = list => {
  const productsList = list.map(item => renderProduct(item)).join('');
  document.querySelector('.products').innerHTML = productsList;
}

renderPage(products);