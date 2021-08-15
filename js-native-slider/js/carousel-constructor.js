function Carousel(containerID = '#carousel', slideID = '.slide') {
  this.container = document.querySelector(containerID);
  this.slides = this.container.querySelectorAll(slideID);
  this.interval = 2000;
}
  Carousel.prototype = {
    _initProps(){
      this.currentSlide = 0;
      this.slidesLength = this.slides.length;
      this.isPlaying = true;

      this.FA_PAUSE = '<i class="far fa-pause-circle"></i>';
      this.FA_PLAY = '<i class="far fa-play-circle"></i>';
      this.CODE_SPACE = 'Space';
      this.CODE_LEFT_ARROW = 'ArrowLeft';
      this.CODE_RIGHT_ARROW = 'ArrowRight';
      this.FA_PREV = '<i class="fas fa-angle-left"></i>';
      this.FA_NEXT = '<i class="fas fa-angle-right"></i>';
    },

    _initControls(){
      const controls = document.createElement('div');
      const PAUSE = `<span id="pause-btn" class="control control-pause">${this.FA_PAUSE}</span>`;
      const PREV = `<span id="prev-btn" class="control control-prev">${this.FA_PREV}</span>`;
      const NEXT = `<span id="next-btn" class="control control-next">${this.FA_NEXT}</span>`;

      controls.setAttribute('class', 'controls');
      controls.innerHTML = PAUSE + PREV + NEXT;
      

      this.container.appendChild(controls);

      this.pauseButton = this.container.querySelector('#pause-btn');
      this.prevButton = this.container.querySelector('#prev-btn');
      this.nextButton = this.container.querySelector('#next-btn');
    },

    _initIndicators(){
      const indicators = document.createElement('ol');

      indicators.setAttribute('class', 'indicators');

      for (let i = 0; i < this.slidesLength; i++){
        const indicator = document.createElement('li');
        indicator.setAttribute('class', 'indicator');
        indicator.dataset.slideTo = `${i}`;
        if(i === 0) indicator.classList.add('active');
        indicators.appendChild(indicator);
      }
      this.container.appendChild(indicators);
      this.indContainer = this.container.querySelector('.indicators');
      this.indItems = this.indContainer.querySelectorAll('.indicator');
    },

    _initListeners(){
      this.pauseButton.addEventListener('click', this.pausePlay.bind(this));
      this.prevButton.addEventListener('click', this.prev.bind(this));
      this.nextButton.addEventListener('click', this.next.bind(this));
      this.indContainer.addEventListener('click', this._indicate.bind(this));
      document.addEventListener('keydown', this.pressKey.bind(this));
    },

    _gotoSlide(n){
      this.slides[this.currentSlide].classList.toggle('active');
      this.indItems[this.currentSlide].classList.toggle('active');
      this.currentSlide = (n + this.slidesLength) % this.slidesLength;
      this.indItems[this.currentSlide].classList.toggle('active');
      this.slides[this.currentSlide].classList.toggle('active');
    },

    _gotoNext(){
      this._gotoSlide(this.currentSlide + 1);
    },

    _gotoPrev(){
      this._gotoSlide(this.currentSlide - 1);
    },

    _pause(){
      if(this.isPlaying){
        clearInterval(this.timerID);
        this.isPlaying = false;
        this.pauseButton.innerHTML = this.FA_PLAY;
      }
    },

    _play(){
      this.timerID = setInterval(() => this._gotoNext(), this.interval);
      this.isPlaying = true;
      this.pauseButton.innerHTML = this.FA_PAUSE;
    },

    _indicate(e){
      const target = e.target;
    
      if(target && target.classList.contains('indicator')){
        this._pause();
        this._gotoSlide(+target.dataset.slideTo);
      }
    },

    next(){
      this._pause();
      this._gotoNext();
    },

    prev(){
      this._pause();
      this._gotoPrev();
    },

    pausePlay(){
      if(this.isPlaying) this._pause();
      else this._play();
    },

    pressKey(e){
      if(e.code === this.CODE_LEFT_ARROW) this.prev();
      if(e.code === this.CODE_RIGHT_ARROW) this.next();
      if(e.code === this.CODE_SPACE) this.pausePlay();
    },

    init(){
      this._initProps();
      this._initControls();
      this._initIndicators();
      this._initListeners();
      this.timerID = setInterval(() => this._gotoNext(), this.interval);
    }
  }

function SwipeCarousel() {
  Carousel.apply(this, arguments);
}

SwipeCarousel.prototype = Object.create(Carousel.prototype);
SwipeCarousel.prototype.constructor = SwipeCarousel;

SwipeCarousel.prototype._initListeners = function (){
  Carousel.prototype._initListeners.apply(this);
  this.container.addEventListener('touchstart', this._swipeStart.bind(this));
  this.container.addEventListener('touchend', this._swipeEnd.bind(this));
}

SwipeCarousel.prototype._swipeStart = function(e){
  this.swipeStartX = e.changedTouches[0].pageX;
}

SwipeCarousel.prototype._swipeEnd = function(e){
  this.swipeEndX = e.changedTouches[0].pageX;
  this.swipeStartX - this.swipeEndX > 100 && this.next();
  this.swipeStartX - this.swipeEndX < -100 && this.prev(); 
}
