let form = document.querySelector('#search');
let inputText = document.querySelector('[name="inputText"]');

form.addEventListener('submit', onSubmit); 
     function onSubmit(event) {
    event.preventDefault();
    search(inputText.value);
    inputText.value = '';
 }
 
 
 function search (text) {
  const information = document.querySelectorAll('[data-search=true]')
    for(i=0; i<information.length; i++) {
      let elem = information[i];

      if(text === "") {
        return
      }

      if(!elem.textContent.toLowerCase().includes(text.toLowerCase())){
        elem.parentElement.parentElement.classList.add('hide');
        }
        else{
          elem.parentElement.parentElement.classList.remove('hide');
          elem.parentElement.classList.add('active');
        }
    }    
           
  }


