Vue.component('cart', {
    props: ['cartItems', 'img', 'visibility'],
    template: `
        <div class="cart-block" v-show="visibility">
            <cart-item v-for="item of cartItems" :img="img" :cart-item="item" :key="item.id_product">
            </cart-item>
        </div>
    `
});

Vue.component('cart-item', {
    props: ['img', 'cartItem'],
    template: `
              <div class="cart-item">
                  <div class="basket-item">
                                         
                      <p>{{ cartItem.product_name }}</p>
                      <p>Quantity: {{ cartItem.quantity }} </p>
                      <p>$ {{ cartItem.price }} шт.</p>
                      
                      <div class="bnt-wrp">
                        <div class="product-price">{{ cartItem.quantity*cartItem.price }}</div>
                        <button class="delete-btn btn" @click="$root.remove(cartItem)">x</button>
                      </div>
                          
                  </div>            
              </div>
    `
})