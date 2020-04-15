class Popup {
    constructor(elem) {
        this.elem = elem;
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);

        this.submitButton = document.querySelector('.popup__button');
        this.submitProfileButton = document.querySelector('#submit2');
        this.form = document.querySelector('#form');

        this.listener();
    }

    open() {
        this.elem.classList.add('popup_is-opened');
        this.submitButton.disabled = true;
    }

    close() {
        this.elem.classList.remove('popup_is-opened');
        this.submitButton.disabled = false;
        this.form.reset();
        FormValidator.prototype.clearErrors();
    }
    listener() {
        this.elem.querySelector('.popup__close').addEventListener('click', this.close.bind(this));
      }
}