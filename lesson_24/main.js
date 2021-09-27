const getData = (url) => fetch(url).then((res) => res.json()).then((json) => json.Search);

const search = 'Iron man';
const search2 = 'Superman';
const search3 = 'Batman';

getData(`http://www.omdbapi.com/?apikey=18b8609f&s=${search}`)
.then((movies) => movies.forEach((movie) => console.log(movie)));