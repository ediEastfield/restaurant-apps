import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import LikeButtonInitiator from '../../utils/like-button-presenter';
import {
  createCustomerReviewItemTemplate,
  createDrinksTemplate,
  createFoodsTemplate,
  createMenuItemTemplate,
  createRestaurantDetailTemplate,
  createcustomerReviewsTemplate,
} from '../templates/template-creator';

const Detail = {
  async render() {
    return `
            <div id="restaurant" class="restaurant"></div>
            <div id="likeButtonContainer"></div>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#restaurant');

    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        address: restaurant.address,
        pictureId: restaurant.pictureId,
        city: restaurant.city,
        rating: restaurant.rating,
        description: restaurant.description,
        customerReviews: restaurant.customerReviews,
        menus: restaurant.menus,
      },
    });

    restaurantContainer.innerHTML += createFoodsTemplate();
    restaurant.menus.foods.forEach((menu) => {
      restaurantContainer.innerHTML += createMenuItemTemplate(menu);
    });

    restaurantContainer.innerHTML += createDrinksTemplate();
    restaurant.menus.drinks.forEach((menu) => {
      restaurantContainer.innerHTML += createMenuItemTemplate(menu);
    });

    restaurantContainer.innerHTML += createcustomerReviewsTemplate();
    restaurant.customerReviews.forEach((customerReview) => {
      restaurantContainer.innerHTML += createCustomerReviewItemTemplate(customerReview);
    });
  },
};

export default Detail;
