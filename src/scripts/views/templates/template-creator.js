import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
    <h2 class="restaurant__title">${restaurant.name}</h2>
    <img class="restaurant__poster" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" crossorigin="anonymous"/>
    <div class="restaurant__info">
        <h3>Infrmation</h3>
        <h4>Address</h4>
        <p>${restaurant.address}</p>
        <h4>City</h4>
        <p>${restaurant.city}</p>
        <h4>Rating</h4>
        <p>${restaurant.rating}</p>
    </div>
    <div class="restaurant__overview">
        <h3>Description</h3>
        <p>${restaurant.description}</p>
        <h3>Menus</h3>
    </div>
`;

const createFoodsTemplate = () => `
    <div class="restaurant__overview">
        <h4>Foods:</h4>
    </div>
`;

const createDrinksTemplate = () => `
    <div class="restaurant__overview">
        <h4>Drink:</h4>
    </div>
`;

const createMenuItemTemplate = (menu) => `
    <p>${menu.name}</p>
`;

const createcustomerReviewsTemplate = () => `
    <div class="restaurant__overview">
        <h3>Customer Reviews :</h3>
    </div>
`;

const createCustomerReviewItemTemplate = (customerReview) => `
    <div class="restaurant-item">
        <div class="restaurant-item__content">
            <p><b>${customerReview.name}</b></p>
            <p>${customerReview.review}</p>
            <p><i>${customerReview.date}</i></p>
        </div>
    </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
    <div class="restaurant-item" tabindex="0">
        <div class="restaurant-item__header">
        <img class="restaurant-item__header__poster lazyload" 
        alt="${restaurant.name}" 
        data-src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}" crossorigin="anonymous">
            <div class="restaurant-item__header__rating">
                <p>⭐️<span class="restaurant-item__header__rating__score">${restaurant.rating || '-'}</span></p>
            </div>
        </div>
        <div class="restaurant-item__content">
            <h3 class="restaurant__title"><a href="/#/detail/${restaurant.id}">${restaurant.name || '-'}</a></h3>
        </div>
    </div>
`;

const createLikeRestaurantButtonTemplate = () => `
    <button aria-label="like this restaurant" id="likeButton" class="like">
        <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
    <button aria-label="unlike this restaurant" id="likeButton" class="like">
        <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createFoodsTemplate,
  createDrinksTemplate,
  createMenuItemTemplate,
  createcustomerReviewsTemplate,
  createCustomerReviewItemTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
