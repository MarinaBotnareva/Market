loadProducts().then(({ data: products }) => {

  const favorite = JSON.parse(localStorage.getItem('favorite')) || {};
  
  
  document.querySelector('#popular').addEventListener('click', event => {
    if (event.target.closest('.favorite')){
      
    let articul = event.target.dataset['articul'];
      if (favorite[articul] !== undefined) {
        delete favorite[articul];
      }
      else {
        for (i=0; i<products.length; i++){
          if (articul == products[i].code){
          favorite[articul] = products[i];
          }
        }
      }
    }  
    
      localStorage.setItem('favorite', JSON.stringify(favorite));
      counterFav () 
    })
  })
  