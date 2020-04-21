const serverUrl = TEST;
console.log(serverUrl);

import './pages/index.css';
import {Api} from './scripts/Api.js';
import {FormValidator} from './scripts/FormValidator.js';
import {Popup} from './scripts/Popup.js';
import {UserPopup} from './scripts/UserPopup.js';
import {PlacePopup} from './scripts/PlacePopup.js';
import {UserInfo} from './scripts/UserInfo.js';
import {CardList} from './scripts/CardList.js';
import {Card} from './scripts/Card.js';

console.log(Api);
console.log(FormValidator);
console.log(UserPopup);
console.log(PlacePopup);
console.log(Popup);
console.log(UserInfo);
console.log(CardList);
console.log(Card);


// Переменные 

const placesList = document.querySelector('.places-list');
const popupForm = document.querySelector('.popup');
const plusButton = document.querySelector('.user-info__button');
const placeFormElement = document.querySelector('#form');
const submitButton = document.querySelector('#submit');
const profilePopup = document.querySelector('#profile-popup');
const profileFormElement = document.querySelector('#form2');
const submitButtonProfile = document.querySelector('#submit2');
const editButton = document.querySelector('#edit');
const imagePopup = document.querySelector('#image-popup');
const imageCloseButton = document.querySelector('#image-close');
const modalImg = document.querySelector('.popup__img-zoom');

const api = new Api('cohort9', '690ae7e8-3b88-4011-8a29-50027ad59557');
const card = new Card();

// Отрисовка карточек

const cardList = new CardList(placesList, card, api);
cardList.render();


// Данные пользователя

const userInfo = new UserInfo({
  userNameElem: document.querySelector('.user-info__name'),
  userJobElem: document.querySelector('.user-info__job'),
  userAvatarElem: document.querySelector('.user-info__photo'),
  name: 'Jaques Causteau',
  job: 'Sailor, Researcher',
  api
});

userInfo.getInfo();

// Попап информации о пользователе

const userPopup = new UserPopup({
  elem: document.querySelector('#profile-popup'),
  userInfo,
  api,
});

// Попап добавления новой карточки

const placePopup = new PlacePopup({
  elem: document.querySelector('.popup'),
  plusButton: document.querySelector('.user-info__button'),
  buttonSave: document.querySelector('.popup__button'),
  name: document.querySelector('#name'),
  link: document.querySelector('#link'),
  card,
  cardList,
});

// Валидация формы

const validator = new FormValidator(profileFormElement, submitButtonProfile);
new FormValidator(placeFormElement, submitButton);

// Открытие увеличенной картики

placesList.addEventListener('click', (event) => {
  if (!event.target.classList.contains('place-card__image')) {
    return;
  }
  else if (event.target.classList.contains('place-card__image')) {
    imagePopup.classList.toggle('popup_is-opened');
  }

  const imgUrl = event.target.style.backgroundImage.slice(5, -2);
  modalImg.src = imgUrl;
});

// Закрытие увеличенной картинки

function imagePopupClose (event) {
  imagePopup.classList.remove('popup_is-opened');
}

// Обработчики

editButton.addEventListener('click', userPopup.show.bind(userPopup));
imageCloseButton.addEventListener('click', imagePopupClose);




