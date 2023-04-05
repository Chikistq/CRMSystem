import {preloader} from '@/js/DOM/_elements';
import {$} from '@/js/DOM/dom';
import {generateRow} from '@/js/DOM/createTable';
import {DomComponents} from '@/js/DOM/DomComponents';
import {modals} from '@/js/DOM/_modals';



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



  /* после добавления слушателей событий, добавить механизм
  * 1) по клику на изменить/удалить - открытие модалок.
  * 2) создать перед этим модалки.
  * 3) надо подумать как привязать сюда добавление нового пользователя. */


  render() {
  //  Рендринг таблицы
    return this.getTable()
  }

}
