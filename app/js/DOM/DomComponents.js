import {$} from '@/js/DOM/dom';
import {preloader, showRow} from '@/js/DOM/_elements';
import {Exchange} from '@/js/API/Exchange';
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';






export class DomComponents {
  constructor(options = {}) {
    this.$selector = $(options.selector)
    this.componets = options.components || []
    this.exchange = new Exchange || []
  }

  listeners() {
    const link = document.querySelectorAll('.a-link')

    link.forEach(item => {
      item.addEventListener('click', function(e) {
        e.preventDefault()
      })
    })
  }


  async init() {
    this.$selector.html(preloader)

    await this.exchange.getData()
    console.log(this.exchange)

    if (this.exchange.response == '200') {
      $('.table__wrap-preload').removeClass('active')

      this.componets = this.componets.map(Component => {
        const component = new Component(this.exchange.data)
        this.$selector.append(component.render())

        if (component.name === 'Table') {
          showRow(this.exchange.data)
        }
        return component
      })

      this.componets.forEach(component => component.listeners())


      tippy('[data-tippy-content]', {
        theme: 'custom',
      })
    }



  }
}