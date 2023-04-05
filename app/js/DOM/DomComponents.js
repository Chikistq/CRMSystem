import {$} from '@/js/DOM/dom';
import {preloader, showRow} from '@/js/DOM/_elements';





export class DomComponents {
  constructor(options = {}) {
    this.$selector = $(options.selector)
    this.componets = options.components || []
    this.data = options.data || []
    this.listeners = ['click'] || []
  }


  /* добавить слушатели событий.  */
  addEvents() {

  }




  init() {
    this.$selector.html(preloader)

    setTimeout(() => {
      $('.table__wrap-preload').removeClass('active')

      this.componets.forEach(Comment => {
        const component = new Comment(this.data)
        this.$selector.append(component.render())

        if (component.name === 'Table') {
          showRow(this.data)
        }
      })

    }, 1500)
  }
}
