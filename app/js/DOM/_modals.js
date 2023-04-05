import {$} from '@/js/DOM/dom';
import Choices from 'choices.js';

const newUser = `
     <div class="modal__newUser  ">
      <button class="modal__close"></button>
      <div class="modal__newUser-wrap">
        <h2 class="modal__newUser-title h2-title">Новый клиент</h2>
      </div>
      <form class="modal__newUser-form form" enctype="multipart/form-data" id="newUser" action="/" method="post">

        <div class="form__wrap">
          <label class="form__label" for="lastName">
            <span class="visually-hidden">Введите фамилию</span>
            <input class="form__input user-lastName" id="lastName" type="text" placeholder="Фамилия*" data-validate-field="lastName" name="user_lastName">
          </label>

          <label class="form__label" for="name">
            <span class="visually-hidden">Введите имя</span>
            <input class="form__input user-name" id="name" type="text" placeholder="Имя*" data-validate-field="name" name="user_name">
          </label>

          <label class="form__label" for="secondName">
            <span class="visually-hidden">Введите отчество</span>
            <input class="form__input user-lastName" id="secondName" type="text" placeholder="Отчество" data-validate-field="secondName" name="user_secondName">
          </label>
        </div>

        <div class="form__contacts form__contacts-pd25">
          <div class="form__contacts-items item active">
            <select class="item__select" name="type" >
              <option value="tel">Телефон</option>
              <option value="sec-tel">Доп. телефон</option>
              <option value="Email">Email</option>
              <option value="Vk">Vk</option>
              <option value="Facebook">Facebook</option>
            </select>

            <label class="item__data" for="data">
              <span class="visually-hidden">Введите контакт</span>
              <input class="item__data-input" id="data" type="text" placeholder="Введите данные контакта" data-validate-field="data" name="data">
            </label>
            <button class="item__btn btn btn-delete tooltip" data-tippy-content="Удалить контакт">
              <svg class="btn-delete-icon" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 0C2.682 0 0 2.682 0 6C0 9.318 2.682 12 6 12C9.318 12 12 9.318 12 6C12 2.682 9.318 0 6 0ZM6 10.8C3.354 10.8 1.2 8.646 1.2 6C1.2 3.354 3.354 1.2 6 1.2C8.646 1.2 10.8 3.354 10.8 6C10.8 8.646 8.646 10.8 6 10.8ZM8.154 3L6 5.154L3.846 3L3 3.846L5.154 6L3 8.154L3.846 9L6 6.846L8.154 9L9 8.154L6.846 6L9 3.846L8.154 3Z" fill="#F06A4D"/>
              </svg>
            </button>
          </div>
          <div class="form__contacts-items item active">
            <select class="item__select" name="type" >
              <option value="tel">Телефон</option>
              <option value="sec-tel">Доп. телефон</option>
              <option value="Email">Email</option>
              <option value="Vk">Vk</option>
              <option value="Facebook">Facebook</option>
            </select>

            <label class="item__data" for="data">
              <span class="visually-hidden">Введите контакт</span>
              <input class="item__data-input" id="data" type="text" placeholder="Введите данные контакта" data-validate-field="data" name="data">
            </label>
            <button class="item__btn btn btn-delete tooltip" data-tippy-content="Удалить контакт">
              <svg class="btn-delete-icon" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 0C2.682 0 0 2.682 0 6C0 9.318 2.682 12 6 12C9.318 12 12 9.318 12 6C12 2.682 9.318 0 6 0ZM6 10.8C3.354 10.8 1.2 8.646 1.2 6C1.2 3.354 3.354 1.2 6 1.2C8.646 1.2 10.8 3.354 10.8 6C10.8 8.646 8.646 10.8 6 10.8ZM8.154 3L6 5.154L3.846 3L3 3.846L5.154 6L3 8.154L3.846 9L6 6.846L8.154 9L9 8.154L6.846 6L9 3.846L8.154 3Z" fill="#F06A4D"/>
              </svg>
            </button>
          </div>


          <a class="form__link link" href="\\">Добавить контакт</a>
        </div>
      </form>

      <button class="form__btn btn btn-primary" >Сохранить</button>
      <a class="form__link link-cancel" href="\\">Отмена</a>

    </div>
`
const changeUser = `
     <div class="modal__changeUser ">
      <button class="modal__close"></button>

      <div class="modal__changeUser-wrap">
        <h2 class="modal__changeUser-title h2-title">Изменить данные</h2>
        <p class="modal__changeUser-id">ID: 123458</p>
      </div>
      <form class="modal__changeUser-form form" enctype="multipart/form-data" id="changeUser" action="/" method="post">
        <div class="form__wrap">
          <label class="form__label" for="changeLastName">
            <span class="">Фамилия*</span>
            <input class="form__input user-lastName" id="changeLastName" type="text" placeholder="" data-validate-field="lastName" name="user_lastName">
          </label>

          <label class="form__label" for="changeName">
            <span class="">Имя*</span>
            <input class="form__input user-name" id="changeName" type="text" placeholder="" data-validate-field="name" name="user_name">
          </label>

          <label class="form__label" for="changeSecondName">
            <span class="">Отчество</span>
            <input class="form__input user-lastName" id="changeSecondName" type="text" placeholder="" data-validate-field="secondName" name="user_secondName">
          </label>
        </div>


        <div class="form__contacts form__contacts-pd25">


          <div class="form__contacts-items item active">
            <select class="item__select" name="type" >
              <option value="tel">Телефон</option>
              <option value="sec-tel">Доп. телефон</option>
              <option value="Email">Email</option>
              <option value="Vk">Vk</option>
              <option value="Facebook">Facebook</option>
            </select>

            <label class="item__data" for="data">
              <span class="visually-hidden">Введите контакт</span>
              <input class="item__data-input" id="data" type="text" placeholder="Введите данные контакта" data-validate-field="data" name="data">
            </label>
            <button class="item__btn btn btn-delete tooltip" data-tippy-content="Удалить контакт">
              <svg class="btn-delete-icon" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 0C2.682 0 0 2.682 0 6C0 9.318 2.682 12 6 12C9.318 12 12 9.318 12 6C12 2.682 9.318 0 6 0ZM6 10.8C3.354 10.8 1.2 8.646 1.2 6C1.2 3.354 3.354 1.2 6 1.2C8.646 1.2 10.8 3.354 10.8 6C10.8 8.646 8.646 10.8 6 10.8ZM8.154 3L6 5.154L3.846 3L3 3.846L5.154 6L3 8.154L3.846 9L6 6.846L8.154 9L9 8.154L6.846 6L9 3.846L8.154 3Z" fill="#F06A4D"/>
              </svg>
            </button>
          </div>
          <div class="form__contacts-items item active">
            <select class="item__select" name="type" >
              <option value="tel">Телефон</option>
              <option value="sec-tel">Доп. телефон</option>
              <option value="Email">Email</option>
              <option value="Vk">Vk</option>
              <option value="Facebook">Facebook</option>
            </select>

            <label class="item__data" for="data">
              <span class="visually-hidden">Введите контакт</span>
              <input class="item__data-input" id="data" type="text" placeholder="Введите данные контакта" data-validate-field="data" name="data">
            </label>
            <button class="item__btn btn btn-delete tooltip" data-tippy-content="Удалить контакт">
              <svg class="btn-delete-icon" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 0C2.682 0 0 2.682 0 6C0 9.318 2.682 12 6 12C9.318 12 12 9.318 12 6C12 2.682 9.318 0 6 0ZM6 10.8C3.354 10.8 1.2 8.646 1.2 6C1.2 3.354 3.354 1.2 6 1.2C8.646 1.2 10.8 3.354 10.8 6C10.8 8.646 8.646 10.8 6 10.8ZM8.154 3L6 5.154L3.846 3L3 3.846L5.154 6L3 8.154L3.846 9L6 6.846L8.154 9L9 8.154L6.846 6L9 3.846L8.154 3Z" fill="#F06A4D"/>
              </svg>
            </button>
          </div>


          <a class="form__link link" href="\\">Добавить контакт</a>
        </div>

      </form>



      <button class="form__btn btn btn-primary" >Сохранить</button>
      <a class="form__link link-cancel" href="\\">Удалить клиента</a>

    </div>
`
const deleteUser = `
    <div class="modal__deleteUser ">
      <button class="modal__close"></button>
      <h2 class="modal___deleteUser-title h2-title">Новый клиент</h2>
      <p class="modal__deleteUser-descr">Вы действительно хотите удалить данного клиента?</p>
      <button class="modal__deleteUser-btn form__btn btn btn-primary" >Удалить</button>
      <a class="modal__deleteUser-link link-cancel" href="\\">Отмена</a>
    </div>
`

function reloadChoices() {
  /* Choices */
  const element = document.querySelectorAll('.item__select');
  /* eslint-disable-next-line no-unused-vars */
  const choices = select(element)

  function select(elem) {
    elem.forEach((item) => {
      new Choices(item, {
        searchEnabled: false,
        itemSelectText: '',
      })
    })
  }
  /* Choices end */

}


export function modals() {
  const modal = document.createElement('div')
  modal.classList.add('main__modal')
  modal.classList.add('modal')
  const main = $('.main')
  return {
    newUser() {
      modal.insertAdjacentHTML("beforeend", newUser)
      modal.classList.add('active')
      main.append(modal)

      reloadChoices()

    },
    changeUser() {
      modal.insertAdjacentHTML("beforeend", changeUser)
      modal.classList.add('active')
      main.append(modal)

      reloadChoices()
    },
    deleteUser() {
      modal.insertAdjacentHTML("beforeend", deleteUser)
      modal.classList.add('active')
      main.append(modal)

    },
    close() {
      modal.classList.remove('active')
      modal.remove()
    }
  }
}
