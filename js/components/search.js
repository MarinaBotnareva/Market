let inputText = document.querySelector('[name="inputText"]');
let information = document.querySelectorAll("[data-search=true]");
let form = document.querySelector('#search');
let card = document.querySelectorAll('.product')
   

form.addEventListener('submit', onSubmit); 
     function onSubmit(event) {
    event.preventDefault();
    search(inputText.value);
    inputText.value = '';
 }
 
 
 function search (text) {
    for(i=0; i<information.length; i++) {
      let elem = information[i];

      if(elem.textContent.includes(text)){
        console.log(text);
          }
    }            
  }


 

  
    
