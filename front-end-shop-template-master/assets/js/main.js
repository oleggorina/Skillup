const cartCounterLabel = document.querySelector('#cart-counter-label');
const contentContainer = document.querySelector('#content-container');

let cartCounter = 0;
let cartPrice = 0;

const incrementCounter = () => {
  cartCounterLabel.innerHTML = `${++cartCounter}`;
  if (cartCounter === 1) {
    cartCounterLabel.style.display = 'block';
  }
}

const getMockData = (target) => +target
                    .parentElement
                    .previousElementSibling
                    .innerHTML
                    .replace(/^\$(\d+)\s\D+(\d+).*$/, '$1.$2');


const getPrice = (target, price) => Math.round((price+ getMockData(target)) * 100) / 100;

const disableControls = (target, fn) => {
  contentContainer.removeEventListener('click', fn);
  target.disabled = true;
}

const enableControls = (target, fn) => {
  contentContainer.addEventListener('click', btnClickHandler);
}

const btnClickHandler = (e) => {
  const target = e.target;
  const interval = 2000;

  let restoreHtml = null;
  
  if(target && target.matches('.item-actions__cart')){
    incrementCounter();

    cartPrice = getPrice(target, cartPrice);

    restoreHtml = target.innerHTML;
    target.innerHTML = `Added ${cartPrice.toFixed(2)} $`;
    
    disableControls(target, btnClickHandler);

    setTimeout(() => {
      target.innerHTML = restoreHtml;
      enableControls(target, btnClickHandler);
      target.disabled = false;
    }, interval);
  }
}

contentContainer.addEventListener('click', btnClickHandler);