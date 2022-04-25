const cartCont = document.createElement('main');
let cartData = JSON.parse(localStorage.getItem('cart')); 

function renderCart(){
  let list = document.createElement('div'); 
  for (items in cartData) {
    let item = document.createElement('div');
    let img = document.createElement('img');
    img.src = `https://github.com/fd-freshjs/serve-json/raw/main/assets/images/mebel/${cartData[items].code}.png`;
    let name = document.createElement('span');
    name.textContent = `${cartData[items].name}`;
    let minus = document.createElement('button');
    minus.textContent = `-`;
    minus.classList.add('minus')
    minus.setAttribute('data-articul', `${items}`)
    let count = document.createElement('span');
    count.textContent = `${cartData[items].count}`;
    let plus = document.createElement('button');
    plus.textContent = `+`;
    plus.classList.add('plus')
    plus.setAttribute('data-articul', `${items}`)
    let price = document.createElement('span');
    price.textContent = `${cartData[items].price.current}` + " руб.";
    let del = document.createElement('button');
    del.textContent = `x`;
    del.setAttribute('data-articul', `${items}`)
    minus.addEventListener('click', (event) => {
      let articul = event.target.dataset['articul']
      if(cartData[articul].count === 1) {
        return;
      }
      cartData[articul].price.current = `${cartData[articul].price.current}`/`${cartData[articul].count}`; 
      cartData[articul].count--;
      count.textContent = `${cartData[articul].count}`;
      cartData[articul].price.current = `${cartData[articul].count}` * `${cartData[articul].price.current}`;
      price.textContent = `${cartData[articul].price.current}` + " руб.";
      localStorage.setItem('cart', JSON.stringify(cartData))
    })
    plus.addEventListener('click', (event) => {
      let articul = event.target.dataset['articul']
      cartData[articul].price.current = `${cartData[articul].price.current}`/`${cartData[articul].count}`; 
      cartData[articul].count++;
      count.textContent = `${cartData[articul].count}`;
      cartData[articul].price.current = `${cartData[articul].count}` * `${cartData[articul].price.current}`;
      price.textContent = `${cartData[articul].price.current}` + " руб.";
      localStorage.setItem('cart', JSON.stringify(cartData))
     console.log(articul)
    }) 
      del.addEventListener('click', (event) => {
        let articul = event.target.dataset['articul']
        item.remove();
        delete cartData[articul]
        localStorage.setItem('cart', JSON.stringify(cartData))
        counterCart ()
      })
    item.append(img, name, minus, count, plus, price, del)
    list.append(item)
    
  }  
  cartCont.append(list)
  }

function openCart(){
  if (Object.keys(cartData).length !== 0) {
    
    renderCart();
      
    } else {
    cartCont.innerHTML = 'В корзине пусто!';  
  }  
 return cartCont; 
} 

console.log(cartData)      
   