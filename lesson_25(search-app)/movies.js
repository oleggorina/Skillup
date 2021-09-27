import { 
  inputSearch, 
  addMovieToList, 
  createMarkup, 
  createStyle,
  triggerMode,
  clearMoviesMarkup,
  movieList
} from "./dom.js";

let siteUrl = null;
let searchLast = null;

const debounce = (() => {
  let timer = 0;

  return (cb, ms) => {
    clearTimeout(timer);
    timer = setTimeout(cb, ms);
  }
})();

const getData = (url) => fetch(url)
  .then((response) => response.json())
  .then((json) => {
    if (!json || !json.Search){
      throw Error ('Сервер вернул не правильный объект!')
    }
    return json.Search;
  });

const inputSearchHandler = (e) => {
  debounce(() => {
    const searchString = e.target.value.trim();

    if (searchString && searchString.length > 3 && searchString !== searchLast) {
      if (!triggerMode) clearMoviesMarkup(movieList);
      getData(`${siteUrl}?apikey=18b8609f&s=${searchString}`)
      .then((movies) => movies.forEach((movie) => addMovieToList(movie)))
      .catch(err => console.log(err));
    }

    searchLast = searchString;
  }, 2000);
}

export const appInit = (url) => {
  createMarkup();
  createStyle();
  siteUrl = url;
  inputSearch.addEventListener('keyup', inputSearchHandler);
}