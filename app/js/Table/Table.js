import {$} from '@/js/DOM/dom'
import {generateRow} from '@/js/DOM/createTable'
import {DomComponents} from '@/js/DOM/DomComponents'
import {modals} from '@/js/DOM/_modals'
import {getUserData, preloader} from '@/js/DOM/_elements'
import {Exchange} from '@/js/API/Exchange'
import tippy from 'tippy.js'
import 'tippy.js/dist/tippy.css'



export class Table extends DomComponents {
  constructor(selector, options) {
    super(selector, {
      name: 'Table',
      ...options
    })
    this.$selector = $(selector)
    this.exchange = new Exchange || []
  }


  getTable() {
    this.$selector.html(preloader)

    const table = document.createElement('table')
    const tableBody = document.createElement('tbody')
    table.classList.add('table__body')
    tableBody.classList.add('table__body')
    table.append(tableBody)


    if (this.exchange.response == '200' || this.exchange.response == '201') {
      $('.table__wrap-preload').removeClass('active')
      this.$selector.append(table)
      this.exchange.data.forEach(client => {
        const row = generateRow(client)
        tableBody.append(row)
        row.style.display = 'flex'
        setTimeout(() => {
          row.style.opacity = '1';
          row.style.height = "100%";
        }, 50);
      })

      tippy('[data-tippy-content]', {
        theme: 'custom',
      })

    }
  }

  listeners() {
    super.listeners()

    /* Add new Client */
    const newClbtn = $('.main__addbtn')
    function addModal() {
      const newClform = modals()
      newClform.newUser().on('click', (e) => {
        e.preventDefault()
        if (e.target == $('.modal__close').$el || e.target == $('.link-cancel').$el || e.target == $('.main__modal').$el) newClform.close()

        if (e.target == $('.btn-primary').$el) {
          (async () => {
            await this.exchange.create(getUserData())
            // добавить сообщение для пользователя, в соответствии со статусом ответа - ошибка или успешная запись(+валидацию)
            if (this.exchange.response === 200 || this.exchange.response === 201) {
              await this.exchange.getData()
              newClform.close()
              await this.getTable()

              // перезапуск обработчиков после отрисовки таблицы
              await this.listeners()
            }
          })()
        }
      })
    }
    const addNewClient = addModal.bind(this)

    // обработчик повешен намеренно в таком виде, чтобы после повторных отрисовок
    // таблицы(после изменений) не задваивались\затраивались... EventListener на
    // кнопке "Добавить клиента"
    newClbtn.$el.onclick = addNewClient

    /* Add new Client end */

    /* change Client */
    const changeClBtns = document.querySelectorAll('.action__change')
    let changeClient = function(e) {
      e.preventDefault()
      const changeForm = modals()
      const id = e.target.dataset.rowid
      const client = this.exchange.data.find(item => item.id == id )

      changeForm.changeUser(client).on('click', (e) => {
        e.preventDefault()

        if ($('.modal').$el.children.length === 1) {
          if (e.target == $('.modal__close').$el || e.target == $('.main__modal').$el) changeForm.close()

        }

        if (e.target == $('.btn-primary').$el) {

          (async () => {
            await this.exchange.change(getUserData(), client.id)
            // добавить сообщение для пользователя, в соответствии со статусом ответа - ошибка или успешная запись
            if (this.exchange.response === 200 || this.exchange.response === 201) {
              await this.exchange.getData()
              changeForm.close()
              await this.getTable()

              // перезапуск обработчиков после отрисовки раблицы
              changeClBtns.forEach(link => {
                link.removeEventListener('click', changeClient)
              })
              await this.listeners()
            }
          })()
        }

        if (e.target == $('.link-cancel').$el) {
          const formActive = $('.modal__changeUser')
          formActive.css({display: 'none'})

          const newForm = changeForm.deleteUser()
          newForm.on('click', (e) => {
            e.preventDefault()

            if (e.target == $('.close').$el || e.target == $('.modal__deleteUser-link.link-cancel').$el) {
              $('.modal__deleteUser').remove()
              formActive.css({display: 'flex'})
            }

            if (e.target == $('.modal__deleteUser-btn').$el) {
              (async () => {
                await this.exchange.delete(id)
                // добавить сообщение для пользователя, в соответствии со статусом ответа - ошибка или успешная запись
                if (this.exchange.response === 200 || this.exchange.response === 201) {
                  await this.exchange.getData()
                  changeForm.close()
                  await this.getTable()


                  // перезапуск обработчиков после отрисовки раблицы
                  changeClBtns.forEach(link => {
                    link.removeEventListener('click', changeClient)
                  })
                  await this.listeners()
                }
              })()
            }
          })
        }

      })
    }
    changeClient = changeClient.bind(this)

    changeClBtns.forEach(link => {
      link.addEventListener('click', changeClient)
    })
    /* change Client  end */

    /* delete Client */
    const deleteBtns = document.querySelectorAll('.action__delete')
    let deleteCl = function(e) {
      e.preventDefault()
      const deleteForm = modals()
      const id = e.target.dataset.rowid


      deleteForm.deleteUser().on('click', (e) => {
        e.preventDefault()
        console.log('проверка')

        if (e.target == $('.modal__close').$el || e.target == $('.main__modal').$el || e.target == $('.link-cancel').$el) deleteForm.close()

        if (e.target == $('.btn-primary').$el) {

          (async () => {
            await this.exchange.delete(id)
            if (this.exchange.response === 404) console.log('Не удалось удалить студента, так как его не существует')
            // добавить сообщение для пользователя, в соответствии со статусом ответа - ошибка или успешная запись
            if (this.exchange.response === 200 || this.exchange.response === 201) {
              await this.exchange.getData()
              deleteForm.close()
              await this.getTable()

              // перезапуск обработчиков после отрисовки таблицы
              deleteBtns.forEach(link => {
                link.removeEventListener('click', deleteCl)
              })
              await this.listeners()

            }
          })()
        }
      })
    }

    deleteCl = deleteCl.bind(this)

    deleteBtns.forEach(link => {
      link.addEventListener('click', deleteCl)
    })
    /* delete Client end */
  }


  async render() {
  //  Рендринг таблицы
    await this.exchange.getData()
    this.getTable()
    return this

  }

}
