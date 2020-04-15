class UserPopup extends Popup {
    constructor({elem, userInfo, api}) {
        super(elem);

        this.api = api;
        this.userInfo = userInfo;
        this.inputName = this.elem.querySelector('#username');
        this.inputJob = this.elem.querySelector('#about-user');
        this.formElem = this.elem.querySelector('#form2');
        this.submitButtonElem = this.elem.querySelector('#submit2');

        //обработчики
        this.elem.querySelector('#profile-close')
        .addEventListener('click', this.close.bind(this));

        //submit
        this.formElem.addEventListener('submit', this.submit.bind(this));
    }

    show() {
        const info = this.userInfo.getCurrentUserInfo();

        this.inputName.value = info.name;
        this.inputJob.value = info.job;
        this.open();
    }
    
    submit(event) {
        event.preventDefault();

        const {name, job} = {name: this.inputName.value, job: this.inputJob.value };

        this.api
        .patchUserInfo(this.inputName.value, this.inputJob.value)
        .then(data => {
            this.userInfo.setUserInfo({
                name: data.name,
                job: data.about,
                avatar: data.avatar
            });
            this.userInfo.updateUserInfo();
            this.close();
            this.formElem.reset();
        })
        .catch(err => {
            alert(err);
        });
}   

}
