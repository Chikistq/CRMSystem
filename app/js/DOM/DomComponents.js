export class DomComponents {
  constructor(options = {}) {
    this.selector = options.selector
    this.componets = options.components || []
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

    this.componets = this.componets.map(async Component => {
      const component = new Component(this.selector)
      await component.render()
      component.listeners()
      return component
    })

  }

}
