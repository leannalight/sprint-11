class UserInfo {
    constructor({userNameElem, userJobElem, userAvatarElem, name, job, avatar, api}) {
        this.userName = name;
        this.userJob = job;
        this.userAvatar = avatar;
        this.userNameElem = userNameElem;
        this.userJobElem = userJobElem;
        this.userAvatarElem = userAvatarElem;
        this.api = api;

    }

    setUserInfo({name, job, avatar}) {
        this.userName = name;
        this.userJob = job;
        this.userAvatar = avatar;
    }

    updateUserInfo() {
        this.userNameElem.textContent = `${this.userName}`;
        this.userJobElem.textContent = `${this.userJob}`;
        this.userAvatarElem.setAttribute('style', `background-image:url(${this.userAvatar})`);
    }

    getCurrentUserInfo() {
        return {
            name: this.userName,
            job: this.userJob,
        }
    }

    getInfo() {
        console.log('Запрос данных о пользователе');

       this.api
        .getUserInfo()
        .then(data => {
            const { name, about, avatar } = data;
            this.setUserInfo({name, job: about, avatar});
            this.updateUserInfo();
        })
        .catch(err => {
            alert(err);
        });
       
    }
}