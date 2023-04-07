import {$} from '@/js/DOM/dom';
import {generateRow} from '@/js/DOM/createTable';
import {DomComponents} from '@/js/DOM/DomComponents';
import {modals} from '@/js/DOM/_modals';
import {getUserData} from '@/js/DOM/_elements';



export class Table extends DomComponents {
  constructor(options) {
    super(options)
    this.name = 'Table'
    this.data = options
    /* ответ сервера в свойстве объекта */
  }

  getTable() {
    const table = document.createElement('table')
    const tableBody = document.createElement('tbody')
    table.classList.add('table__body')
    tableBody.classList.add('table__body')
    table.append(tableBody)

    // тут будет заходить массив с объектами из ответа сервера. И например forEach или Map с вызовом функции генерации строки и апендом ее в таблицу


    this.data.forEach(client => {
      tableBody.append(generateRow(client))
    })
    return table
  }

  listeners() {
    super.listeners()

    /* Add new Client */
    $('.main__addbtn').on('click', () => {
      const newClform = modals()
      newClform.newUser().on('click', function(e) {
        e.preventDefault()
        if (e.target == $('.modal__close').$el || e.target == $('.link-cancel').$el || e.target == $('.main__modal').$el) newClform.close()

        if (e.target == $('.btn-primary').$el) {
          getUserData()
        //  добавить соответственно newClform.close() и ответ сервера как описано в ТЗ.
        }
      })
    })
    /* Add new Client end */


    /* change Client */
    document.querySelectorAll('.action__change').forEach(link => {
      link.addEventListener('click', (e) => {
        const changeForm = modals()
        const id = e.target.dataset.rowid
        const client = this.data.find(item => item.id == id )

        changeForm.changeUser(client).on('click', function(e) {
          e.preventDefault()
          if (e.target == $('.modal__close').$el || e.target == $('.main__modal').$el) changeForm.close()

          if (e.target == $('.btn-primary').$el) {
            getUserData()
            //  добавить соответственно changeForm.close() и ответ сервера как описано в ТЗ.
          }
        })
      })
    })


    /* change Client  end */




  }

  /* после добавления слушателей событий, добавить механизм
  * 1) по клику на изменить/удалить - открытие модалок.
  * 2) создать перед этим модалки.
  * 3) надо подумать как привязать сюда добавление нового пользователя. */


  render() {
  //  Рендринг таблицы
    return this.getTable()
  }

}
