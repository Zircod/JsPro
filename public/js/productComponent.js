const product = {
  props: ['img', 'product'],
  template: `<div class="product-item">
                        <img :src="img" alt="Some img">
                        <div class="desc">
                            <h3>{{ product.product_name }}</h3>
                            <p>{{ product.price }} $</p>
                            <button class="buy-btn" @click="$root.$refs.cart.addProduct(product)">Купить</button>
                        </div>
                    </div>`
}

const products = {
  components: {product},
  data () {
    return {
      catalogUrl: '/catalogData.json',
      products: [],
      imgCatalog: 'https://i.ibb.co/bvjZbP9/black-friday-elements-assortment.jpg',
      filtered: []
    }
  },
  mounted () {

    this.$parent.getJson(`${API + this.catalogUrl}`)
    .then(data => {
      for(let el of data){
        this.products.push(el);
        this.filtered.push(el);
      }
    });
    this.$parent.getJson(`getProducts.json`)
    .then(data => {
      for(let el of data){
        this.products.push(el);
        this.filtered.push(el);
      }
      console.log (this.filtered)
    });
  },
  methods: {
    filter (val) {
      let regExp = new RegExp (val, 'i');
      this.filtered = this.products.filter (el => regExp.test (el.product_name))
    }
  },
  template: `
    <div class="products">
        <product 
        v-for="product of filtered" 
        :key="product.id_product"
        :img="product.img"
        :product="product"></product>
    </div>
    `
}


// Vue.component('products', {
//    props: ['products', 'img'],
//    template: `<div class="products">
//                 <product v-for="item of products"
//                 :key="item.id_product"
//                 :img="img"
//                 :product="item"></product>
//                </div>`
// });
//
// Vue.component('product', {
//     props: ['product', 'img'],
//     template: `
//             <div class="product-item">
//                 <img :src="img" alt="Some img">
//                 <div class="desc">
//                     <h3>{{ product.product_name }}</h3>
//                     <p>{{ product.price }}</p>
//                     <button class="buy-btn" @click="$parent.$emit('add-product', product)">Купить</button>
//                 </div>
//             </div>
//     `
// })