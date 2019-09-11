import router from './app.js';

const Home = {
  render: () => {
    document.getElementById('search-result').innerHTML = '';
    const searchForm = document.getElementById('search-form');

    searchForm.style.display = 'block';
    searchForm.innerHTML = `<h4>Type what are you want to find:</h4>
    <input type="text" id="search-input" class="form-control">
    <input type="button" id="search-btn" value="Search" class="search-btn btn btn-danger mt-2" disabled> `;

    const searchButton = document.getElementById('search-btn');
    const searchInput = document.getElementById('search-input');

    searchInput.addEventListener('keydown', () => {
      if (searchInput.value.length > 1) {
        searchButton.disabled = false;
      } else {
        searchButton.disabled = true;
      }
    });

    searchButton.addEventListener('click', () => {
      window.history.pushState({}, '', `/search?q=${searchInput.value}`);
      router(searchInput);
    });
  }
};

export default Home;