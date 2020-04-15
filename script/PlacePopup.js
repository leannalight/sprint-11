class PlacePopup extends Popup {
    constructor({elem, plusButton, buttonSave, name, link, card, cardList}) {
      super(elem);

      this.plusButton = plusButton;
      this.buttonSave = buttonSave;
      this.name = name;
      this.link = link;
      this.cardList = cardList;
      this.card = card;

      this.listenerPlusButton();
      this.listenerButtonSave();
    }
    addNewCard(event) {
      event.preventDefault();

      this.cardList.addCard(this.card.create(this.name.value, this.link.value));
      this.close();
    }
    listenerButtonSave() {
      this.buttonSave.addEventListener('click', this.addNewCard.bind(this));
    }
    listenerPlusButton() {
      this.plusButton.addEventListener('click', this.open.bind(this));
    }
  }