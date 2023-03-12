import '@/index.html'
import '@css/main.scss'
import '@css/media.scss'

import Choices from 'choices.js'
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';



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

const link = document.querySelectorAll('.a-link')

link.forEach(item => {
  item.addEventListener('click', function(e) {
    e.preventDefault()
  })
})

tippy('.tooltip', {
  theme: 'custom',
  // trigger: 'click',
});


console.log('привет')
console.log('привет2')
