import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Restaurant = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">List Restaurants</h2>
        <div id="restaurants" class="restaurants">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.restaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurantsContainer.innerHTML = restaurants.map(createRestaurantItemTemplate).join('\n');
  },
};

export default Restaurant;
