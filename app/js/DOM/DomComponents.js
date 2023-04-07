import {$} from '@/js/DOM/dom';
import {preloader, showRow} from '@/js/DOM/_elements';





export class DomComponents {
  constructor(options = {}) {
    this.$selector = $(options.selector)
    this.componets = options.components || []
    this.data = options.data || []
  }

  listeners() {
    const link = document.querySelectorAll('.a-link')

    link.forEach(item => {
      item.addEventListener('click', function(e) {
        e.preventDefault()
      })
    })
  }


  init() {
    this.$selector.html(preloader)

    // setTimeout(() => {
    //   $('.table__wrap-preload').removeClass('active')
    //
    //   this.componets = this.componets.map(Component => {
    //     const component = new Component(this.data)
    //     this.$selector.append(component.render())
    //
    //     if (component.name === 'Table') {
    //       showRow(this.data)
    //     }
    //     return component
    //   })
    //
    // }, 1500)

    $('.table__wrap-preload').removeClass('active')

    this.componets = this.componets.map(Component => {
      const component = new Component(this.data)
      this.$selector.append(component.render())

      if (component.name === 'Table') {
        showRow(this.data)
      }
      return component
    })

    this.componets.forEach(component => component.listeners())

  }
}
