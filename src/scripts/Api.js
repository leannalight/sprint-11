class Api {
    constructor(groupId, token) {
        this.baseUrl = `https://praktikum.tk/${groupId}`;
        this.token = token;
    }

// Загрузка информации о пользователе с сервера
    getUserInfo() {
        return fetch(`${this.baseUrl}/users/me`, {
            method: 'GET',
            headers: {
                authorization: this.token
            }
        })
        .then(res => this.parseResponse(res))
        .catch(err => {
            throw err; 
        });
    }
    
// Загрузка первоначальных карточек с сервера
    loadCards() {
        return fetch(`${this.baseUrl}/cards`, {
            headers: {
                authorization: this.token
            }
        })
            .then(res => this.parseResponse(res))
            .catch(err => {
                throw err; 
            });
    }
    patchUserInfo(name, about) {
        return fetch(`${this.baseUrl}/users/me`, {
          method: 'PATCH',
          headers: {
            authorization: this.token,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: name,
            about: about,
          })
        })
          .then(res => this.parseResponse(res))
          .catch(err => {
            throw err;
          });
      }
    parseResponse(res) {
        if (res.ok) {
            return res.json()
        }
        return Promise.reject(`Что-то пошло не так: ${res.status}`);
    }

}   
