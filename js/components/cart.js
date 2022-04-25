loadProducts().then(({ data: products }) => {

const cart = JSON.parse(localStorage.getItem('cart')) || {};


document.querySelector('#popular').addEventListener('click', event => {
  if (event.target.closest('.buy')){
  let articul = event.target.dataset['articul'];
    if (cart[articul] !== undefined) {
        cart[articul]['count']++;
        cart[articul]['price']['current'] = `${cart[articul].count}`*`${cart[articul]['price']['current']}`
    }
    else {
      for (i=0; i<products.length; i++){
        if (articul == products[i].code){
        cart[articul] = products[i];
        cart[articul]['count'] = 1;
        }
      }
    }
  }
    localStorage.setItem('cart', JSON.stringify(cart));
    counterCart ()
  })
})


