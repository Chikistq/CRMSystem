import {$} from '@/js/DOM/dom';
import {generateRow} from '@/js/DOM/createTable';
import {DomComponents} from '@/js/DOM/DomComponents';
import {modals} from '@/js/DOM/_modals';
import {getUserData, preloader} from '@/js/DOM/_elements';
import {Exchange} from '@/js/API/Exchange';
import tippy from 'tippy.js';



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
        row.style.display = 'block'
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
    $('.main__addbtn').on('click', () => {
      const newClform = modals()
      newClform.newUser().on('click', (e) => {
        e.preventDefault()
        if (e.target == $('.modal__close').$el || e.target == $('.link-cancel').$el || e.target == $('.main__modal').$el) newClform.close()

        if (e.target == $('.btn-primary').$el) {
          (async () => {
            await this.exchange.create(getUserData())
            // добавить сообщение для пользователя, в соответствии со статусом ответа - ошибка или успешная запись
            if (this.exchange.response == '200' || this.exchange.response == '201') {
              await this.exchange.getData()
              newClform.close()
              await this.getTable()
              await this.listeners()
            }
          })()
        }
      })
    })
    /* Add new Client end */

    /* change Client */
    document.querySelectorAll('.action__change').forEach(link => {
      link.addEventListener('click', (e) => {
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
              if (this.exchange.response == '200' || this.exchange.response == '201') {
                await this.exchange.getData()
                changeForm.close()
                await this.getTable()
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
                  if (this.exchange.response == '200' || this.exchange.response == '201') {
                    await this.exchange.getData()
                    changeForm.close()
                    await this.getTable()
                    await this.listeners()
                  }
                })()
              }
            })
          }
        })
      })
    })
    /* change Client  end */

    /* delete Client */
    document.querySelectorAll('.action__delete').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault()
        const deleteForm = modals()
        const id = e.target.dataset.rowid


        deleteForm.deleteUser().on('click', (e) => {
          e.preventDefault()

          if (e.target == $('.modal__close').$el || e.target == $('.main__modal').$el || e.target == $('.link-cancel').$el) deleteForm.close()

          if (e.target == $('.btn-primary').$el) {

            (async () => {
              await this.exchange.delete(id)
              // добавить сообщение для пользователя, в соответствии со статусом ответа - ошибка или успешная запись
              if (this.exchange.response == '200' || this.exchange.response == '201') {
                await this.exchange.getData()
                deleteForm.close()
                await this.getTable()
                await this.listeners()
              }
            })()
          }
        })
      })
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
