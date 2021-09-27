export let movieList = null;
export let inputSearch = null;
export let triggerMode = false;

export const triggerModeHandler = () => triggerMode = !triggerMode;

export const createStyle = () => {
  const headStyle = document.createElement('style');

  headStyle.innerHTML = `
    * { box-sizing: border-box; }
    body { 
      margin: 0;
      font-family: Arial, serif;
     }
    .container { 
      padding: 20px; 
      max-width: 1280px;
      margin: auto;
    }
    .movies {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 20px
    }
    .movie {
      display: flex;
      align-content: center;
      justify-content: center;
    }
    .movie__image {
      width: 100%;
      object-fit: cover;
    }
    .search {
      margin-bottom: 30px;
    }
    .search__label-input {
      display: block;
      margin-bottom: 7px;
    }
    .search__input {
      padding: 10px 15px;
      width: 400px;
      display: block;
      border-radius: 4px;
      border: 1px solid gray;
      margin-bottom: 10px;
    }
    .search__label-checkbox {
      font-size: 12px;
      display: block;
      margin-top: -17px;
      margin-left: 25px;
    }
    .search__checkbox {

    }
  `;
  
  document.head.append(headStyle);
}

const createElement = ({
  type,
  attrs, 
  container = null,
  position = 'append',
  evt = null, 
  handler = null
}) => {
  const el = document.createElement(type);

  for (let key in attrs) {
    if ( key !== 'innerText') {
      el.setAttribute(key, attrs[key]);
    } else {
      el.innerHTML = attrs[key];
    }
  }

  if (evt && handler) el.addEventListener(evt, handler);
  if (container && position === 'append') container.append(el);
  if (container && position === 'prepend') container.prepend(el);
  return el;
}

export const createMarkup = () => {
  const container = createElement({
    type: 'div',
    attrs: {
      class: 'container'
    },
    container: document.body,
    position: 'prepend'
  });

  createElement({
    type: 'h1', 
    attrs: {innerText: 'Приложение для поиска фильмов'}, 
    container
  });

  const searchBox = createElement({
    type: 'div', 
    attrs: {class: 'search'}, 
    container
  });
  
  createElement({
    type: 'label', 
    attrs: {
    class: 'search__label-input',
    for: 'search',
    innerText: 'Поиск: '}, 
    container: searchBox});
  
  inputSearch = createElement({
    type: 'input', 
    attrs: {
    class: 'search__input',
    id: 'search',
    placeholder: 'Поиск: ',
    type: 'text'}, 
    container: searchBox});

  createElement({
    type: 'input', 
    attrs: {
    class: 'search__checkbox',
    id: 'checkbox',
    type: 'checkbox'}, 
    container: searchBox, 
    evt: 'click', 
    handler: () => triggerMode = !triggerMode});

  createElement({
    type: 'label', 
    attrs: {
    class: 'search__label-checkbox',
    for: 'checkbox',
    innerText: 'Добавить фильмы к существующему списку',
    }, 
    container: searchBox});

  movieList = createElement({
    type: 'div', 
    attrs: {class: 'movies'}, 
    container
  });
}

export const addMovieToList = (movie) => {
  const item = createElement({
    type: 'div', 
    attrs: {class: 'movie'}, 
    container: movieList});
  createElement({
    type: 'img', 
    attrs: {
    class: 'movie__image',
    src: /^(http|https):\/\//i.test(movie.Poster) ? movie.Poster : 'img/no-image-available.jpg'
    }, 
    container: item});
}

export const clearMoviesMarkup = (el) => el && (el.innerHTML = '');

