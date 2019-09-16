import Navbar from './Navbar.js';
import * as Parse from './Utils.js';

class RouteHandler {
  constructor(_routes) {
    this.routes = _routes;
  }

  static createRoute(url) {
    window.history.pushState({}, '', url);
    this.goToRoute();
  }

  async goToRoute() {
    const header = document.getElementById('header-container');
    const pageContainer = document.getElementById('page-container');
    if (!header.innerHTML) {
      header.innerHTML = await Navbar.render();
    }

    const request = Parse.parsePathname(window.location.pathname);
    const page = this.routes[request] ? this.routes[request] : this.routes.error;
    pageContainer.innerHTML = '';
    pageContainer.appendChild(await page.render());
  }
}

export default RouteHandler;

/*   const gif = document.getElementById('gif');
  const moreButton = document.getElementById('more-btn');
  const backButton = document.getElementById('back-btn');

  if (gif) {
    gif.addEventListener('click', (event) => {
      event.preventDefault();
      window.history.pushState({}, '', gif.href);
      router();
    });
  }

  if (moreButton) {
    moreButton.addEventListener('click', async () => {
      const gifsAmount = document.getElementsByTagName('img').length;
      const searchInputValue = Parse.parseSearchQuery();
      const moreGifs = await Gifs.getMoreGifs({ searchInputValue, gifsAmount });

      let moreImg = '';

      for (let key = 0; key < moreGifs.data.length; key += 1) {
        moreImg += `<a id="gif" href="/gif/${moreGifs.data[key].id}"><img
              src=${moreGifs.data[key].images.fixed_height_small.url}
              alt="${moreGifs.data[key].title}"
              class="m-1 img-thumbnail"/></a>`;
      }

      document.getElementById('gif-container').innerHTML += moreImg;
    });
  }


  if (backButton) {
    backButton.addEventListener('click', () => {
      if (!document.referrer) {
        window.history.pushState({}, '', '/');
        router();
      } else {
        window.history.back();
      }
    });
  } */
