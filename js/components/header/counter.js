function counterFav () {
    const favorite = JSON.parse(localStorage.getItem('favorite'));
    let nav = document.querySelector('.fav');
    let sum = Object.keys(favorite).length;
    nav.textContent = sum;  
}
counterFav ();

function counterCart () {
  const cart = JSON.parse(localStorage.getItem('cart'));
  let nav = document.querySelector('.cart');
  let sum = Object.keys(cart).length;
  nav.textContent = sum;  
}
counterCart () 