let container = null;
let prevIndicator = null;

function createContainer(){
  let newElement = document.createElement('div');
  newElement.setAttribute('id', 'carousel');
  newElement.setAttribute('class', 'carousel');
  document.querySelector('body').prepend(newElement);
  container = document.querySelector('#carousel');
}

function createSlides(count){
  let ulElement = document.createElement('ul');
  ulElement.setAttribute('class', 'slides');

  for(let i = 0; i < count; i++){
    let slideItem = document.createElement('li');
    let slideLink = document.createElement('a');

    slideItem.setAttribute('class', i === 0 ? 'slides__item active' : 'slides__item');
    slideLink.setAttribute('href', '#');
    slideItem.appendChild(slideLink);
    ulElement.appendChild(slideItem);
  }
  container.appendChild(ulElement);
}

function createIndicators(count){
  let divIndicators = document.createElement('div');
  divIndicators.setAttribute('class', 'indicators');
  document.querySelector('.carousel').append(divIndicators);

  for(let i = 0; i < count; i++){
    let indicatorsItem = document.createElement('span');
    indicatorsItem.setAttribute('class', i === 0 ? 'indicators__item active' : 'indicators__item');
    indicatorsItem.setAttribute('data-slide-to', i);

    divIndicators.appendChild(indicatorsItem);
  }
  container.appendChild(divIndicators);
}

function createControls(){
  let controls = document.createElement('div');
  controls.setAttribute('class', 'controls');

  for(let i = 0; i < 3; i++){
    let controlsItem = document.createElement('div');
    let controlsIcon = document.createElement('i');

    switch(i){
      case 0:
        controlsItem.setAttribute('class', 'controls__item controls__prev');
        controlsIcon.setAttribute('class', 'fas fa-chevron-left');
        break;
      case 1:
        controlsItem.setAttribute('class', 'controls__item controls__next');
        controlsIcon.setAttribute('class', 'fas fa-chevron-right');
        break;
      case 2:
        controlsItem.setAttribute('class', 'controls__item controls__pause');
        controlsIcon.setAttribute('class', 'fas fa-play');
    }
    controlsItem.appendChild(controlsIcon);
    controls.appendChild(controlsItem);
  }
  container.appendChild(controls);
}

function createStyle(){
  let styleBlock = document.createElement('style');
  let style = `
    .slides{
      position: relative;
    }
    .controls{
      position: relative;
    }
    .indicators{
      display: flex;
    }
    .carousel{
      max-width: 1340px;
      margin: auto;
    }
    .indicators__item {
      display: flex;
      width: 50px;
      height: 50px;
      border: 2px solid black;
      margin: 5px;
    }`;

    styleBlock.innerHTML = style;
    container.appendChild(styleBlock);
}

function indicatorsHandler(event){
  let target = event.target;

  if(target.classList.contains('indicators__item')){
    target.style.backgroundColor = 'red';

    if(prevIndicator !== null) {
      prevIndicator.removeAttribute('style');
    }
    prevIndicator = target;
  }
}

function setListener(){
  let indicators = document.querySelector('div.indicators');
  indicators.addEventListener('click', indicatorsHandler);
}

function createCarousel(slidesCount = 5){
  container = document.querySelector('#carousel');
  createSlides(slidesCount);
  createIndicators(slidesCount);
  createControls();
  createStyle();
  setListener();
}

createCarousel();