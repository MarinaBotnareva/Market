let favData = JSON.parse(localStorage.getItem('favorite')); 
const sectionElem = document.createElement('section');
sectionElem.setAttribute("id", "popular");
sectionElem.addEventListener('click', event => {
  if (event.target.closest('.favorite')){
  let articul = event.target.dataset['articul'];
  delete favData[articul];
  event.target.closest('article').remove();
  localStorage.setItem('favorite', JSON.stringify(favData))
  counterFav ()
    }
  })
const articles = []

function renderFavorite () {
    for (items in favData) { 
      const articleElem = document.createElement('article');
      articleElem.classList.add("product");

      let info = document.createElement('div');
      info.classList.add("info");

    let ancer = document.createElement('div');
    ancer.classList.add("ancer");

    let sale = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    sale.setAttributeNS(null, "viewBox", "0 0 63 30");
    sale.setAttributeNS(null, "width", "63");
    sale.setAttributeNS(null, "height", "30");
    sale.setAttributeNS(null, "fill", "none");
    sale.innerHTML = `<path d="M60.8535 3.27246L60.9239 5.57555C60.9526 5.77877 60.9671 5.98482 60.967 6.19277L60.9669 6.98225L61.2573 16.4758L61.2577 16.4888L61.2575 16.4888L61.2575 24.7699L61.2575 24.9305L61.1487 25.0557L58.1271 28.5333C58.6104 28.3344 59.0608 28.0815 59.4689 27.7832C60.871 26.7582 61.7632 25.2031 61.7635 23.4704L60.8535 3.27246ZM60.8535 3.27246C61.4471 4.13535 61.7643 5.13032 61.7648 6.17123C61.7648 6.17132 61.7648 6.1714 61.7648 6.17148L61.7635 23.4703L60.8535 3.27246ZM56.7331 28.9364L55.3102 28.279L55.5311 27.3867C57.9483 27.3868 59.9136 25.6263 59.914 23.4713L59.9153 6.97498L59.8742 5.63036C59.7456 4.79411 59.3191 4.02452 58.641 3.41795C57.8183 2.68273 56.7256 2.27622 55.557 2.2767L55.5567 2.27669L16.6324 2.27495L15.4041 2.31372C15.417 2.4524 15.4637 2.64901 15.5349 2.91925C15.5399 2.93845 15.5451 2.95797 15.5503 2.97778C15.6292 3.27636 15.7256 3.64094 15.7457 3.97332C15.7665 4.31887 15.7151 4.77784 15.3015 5.08014C15.2694 5.10365 15.2054 5.14801 15.1141 5.17906L18.2725 8.32052L18.5906 8.6369L18.2837 8.95014C18.0316 9.20748 17.6278 9.47368 17.1653 9.73807C16.6922 10.0085 16.116 10.3 15.4866 10.6032C14.8405 10.9143 14.1012 11.2547 13.3479 11.6016C13.3011 11.6231 13.2543 11.6447 13.2074 11.6663L14.0091 14.1781L14.0297 14.2427L14.0297 14.3096L14.0297 16.6145C14.095 16.7037 14.1118 16.7885 14.1167 16.8137C14.1288 16.8764 14.1269 16.932 14.1247 16.9646C14.1166 17.0871 14.0726 17.265 14.0141 17.4747L13.754 17.4409C13.7483 17.4487 13.7425 17.4567 13.7367 17.4648C13.6729 17.5527 13.5974 17.6569 13.5175 17.762C13.3074 18.0386 13.0105 18.4007 12.6736 18.6248C12.5037 18.7378 12.2699 18.8527 11.9901 18.8592C11.7121 18.8657 11.4665 18.7642 11.2718 18.5934L6.42679 16.0123L6.35291 15.973L6.29611 15.9149C6.1219 15.737 6.01721 15.5235 6.00524 15.2872C5.99376 15.0605 6.06942 14.8521 6.17592 14.673C6.3825 14.3256 6.7629 13.9926 7.20094 13.6817C8.09034 13.0504 9.42779 12.3669 10.8258 11.7014C11.2217 11.513 11.6169 11.3285 12.0085 11.1472L12.3885 3.86288L12.2341 3.70927L12.3959 3.72101L12.4918 1.88334L12.514 1.45812L12.9872 1.44317L14.9176 1.38223C15.0333 1.3447 15.1552 1.32939 15.274 1.32934L15.2743 1.32934L16.5913 1.3294L34.897 0.751482L34.9062 0.751191L34.9154 0.75119L49.0351 0.751193L55.3646 0.751195L55.4552 0.751195L55.5413 0.778498L59.8168 2.13473C58.6615 1.15911 57.1576 0.622382 55.5557 0.62211L56.7331 28.9364ZM56.7331 28.9364C56.3442 29.0047 55.9424 29.0405 55.5316 29.0406L15.2729 29.0396C15.2728 29.0396 15.2728 29.0396 15.2727 29.0396C13.4737 29.0392 11.7695 28.345 10.5947 27.1397L10.5945 27.1396L2.15924 18.4932L2.15855 18.4925C0.124141 16.4152 0.115419 13.2674 2.16615 11.1734L2.16677 11.1728L10.6018 2.52798L10.6021 2.52769C11.7834 1.31492 13.4968 0.620793 15.2959 0.6203C15.296 0.620301 15.2961 0.6203 15.2961 0.6203L55.5556 0.62211L56.7331 28.9364ZM59.7993 3.18124C59.7759 3.15478 59.7521 3.1285 59.728 3.10242L59.7975 3.12448L59.7993 3.18124ZM14.9746 9.76748C14.3761 10.0557 13.742 10.3487 13.0883 10.6496L13.3904 4.85937L17.1436 8.59247C16.9949 8.69486 16.8098 8.8099 16.5875 8.93698C16.1463 9.18918 15.5962 9.46816 14.9746 9.76748ZM13.5349 3.80366L13.4458 3.79719L13.5201 2.3732L14.3548 2.34685C14.3751 2.59946 14.4474 2.87369 14.5076 3.10222L14.5118 3.11822L14.5184 3.1434C14.605 3.47211 14.6809 3.76001 14.6956 4.00412C14.6965 4.01915 14.6971 4.03352 14.6975 4.04727C14.4321 3.93244 14.0653 3.84214 13.5349 3.80366Z" fill="#E13B3F" stroke="#E13B3F"/>`
    let sale1 = document.createElement('p');
    sale1.textContent = `-${favData[items].sale}%`;
    sale1.classList.add('sale1');
    ancer.append(sale, sale1);

    
    if(favData[items].isBestseller === true) {
    let bestSeller = document.createElement('p');
    bestSeller.textContent = "хит";
    bestSeller.classList.add('best');
    ancer.append(bestSeller);
  }

    let img = document.createElement('img');
    img.src = `https://github.com/fd-freshjs/serve-json/raw/main/assets/images/mebel/${favData[items].code}.png`;
    
    let name = document.createElement('h3');
    name.textContent = `${favData[items].name}`;
    name.setAttribute('data-search', true)
    
    let price = document.createElement('div');
    price.classList.add("price");
    let oldPrice = document.createElement('p');
    oldPrice.textContent = `${favData[items].price.old} руб.`;
    oldPrice.classList.add("old");
    let currentPrice = document.createElement('p');
    currentPrice.textContent = `${favData[items].price.current} руб.`;
    currentPrice.classList.add("current");
    currentPrice.setAttribute('data-search', true)
    
    let choice = document.createElement('div');
    choice.classList.add("choice");
    let buy = document.createElement('button');
    buy.textContent = `КУПИТЬ`;
    buy.classList.add('buy');
    buy.setAttribute('data-articul', `${favData[items].code}`)
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.classList.add('favorite');
    svg.setAttribute('data-articul', `${favData[items].code}`)
    svg.setAttributeNS(null, "viewBox", "0 0 34 29");
    svg.setAttributeNS(null, "width", "34");
    svg.setAttributeNS(null, "height", "29");
    svg.setAttributeNS(null, "fill", "red");
    svg.innerHTML = `<path d="M17.0001 29C16.6794 29.0066 16.3648 28.8764 16.098 28.6266L2.6297 15.2561C-0.87494 11.7696 -0.87494 6.09992 2.6297 2.60068C4.51207 0.842412 6.73304 -0.0651634 8.99399 -1.92152e-05C11.2564 -0.0595561 13.4775 0.854693 15.3583 2.61966L17.0001 4.24589L18.6419 2.61966C22.1511 -0.866919 27.8613 -0.866919 31.3705 2.61966C34.8796 6.10624 34.8796 11.7696 31.3705 15.2751L17.9067 28.6266C17.6383 28.8766 17.3222 29.0067 17.0001 29V29ZM8.99399 2.53107C7.37429 2.49605 5.78587 3.15861 4.44292 4.42939C1.93058 6.92252 1.93058 10.9786 4.44292 13.4717L17.0001 25.9437L29.5618 13.4591C32.0696 10.9659 32.0696 6.90987 29.5618 4.41674C27.054 1.92361 22.9675 1.8983 20.4506 4.42939L17.9067 6.96049C17.6378 7.2038 17.3246 7.3332 17.0046 7.3332C16.6846 7.3332 16.3714 7.2038 16.1025 6.96049L13.5315 4.42939C12.1923 3.16269 10.6091 2.50035 8.99399 2.53107V2.53107Z" >`

    choice.append(buy, svg);
    price.append(oldPrice, currentPrice);
    info.append(ancer, img, name, price, choice);
    articleElem.append(info);
    articles.push(articleElem);
    }
    sectionElem.append(...articles);
  
 return sectionElem;
 counterFav ()
}


  


function openFav(){
  if (Object.keys(favData).length !== 0) {
    
    renderFavorite();
      
    } else {
      sectionElem.innerHTML = 'пусто!';  
  }  
 return sectionElem; 
} 



