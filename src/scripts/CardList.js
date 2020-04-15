// Класс для хранения и отрисовки карточек

class CardList {
  constructor(container, card, api) {
    this.container = container;
    this.card = card;
    this.api = api;

    this.listenerLikeDelete();
  }
// Добавляет карточку в список
  addCard(card) {
    this.container.appendChild(card);
}

// Отрисовывает карточки при загрузке страницы

  render () {

    this.api.loadCards()
    .then(cards => {
      cards.forEach((item) => {
        this.addCard(this.card.create(item.name, item.link));
      })
    })
    .catch(err => {
      alert(err);
    });
  }
    likeDelete(event) {
      if (event.target.classList.contains('place-card__like-icon')) {
        this.card.like(event);
      } else if (event.target.classList.contains('place-card__delete-icon')) {
        this.card.remove(event);
      } 
    }
    listenerLikeDelete() {
      this.container.addEventListener('click', this.likeDelete.bind(this));
    }
}


