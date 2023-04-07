import '@/index.html'
import '@css/main.scss'
import '@css/media.scss'



import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import {Table} from '@/js/Table/Table';
import {DomComponents} from '@/js/DOM/DomComponents';



const arr = [
  {
    id: '111111',
    name: 'Денис',
    secondName: 'Юрьевич',
    surname: 'Скворцов',
    createData: new Date(),
    changeData: new Date(),
    contacts: [{type: "vk", value: "12"}, {type: "fb", value: "12"}, {type: "mail", value: "12"}, {type: "tel", value: "12"}]
  },
  {
    id: '222222',
    name: 'Денис',
    secondName: 'Юрьевич',
    surname: 'Скворцов',
    createData: new Date(),
    changeData: new Date(),
    contacts: [{type: "vk", value: "12"}, {type: "fb", value: "12"}, {type: "mail", value: "12"}]
  },
  {
    id: '333333',
    name: 'Денис',
    secondName: 'Юрьевич',
    surname: 'Скворцов',
    createData: new Date(),
    changeData: new Date(),
    contacts: [{type: "vk", value: "12"}, {type: "fb", value: "12"}, {type: "mail", value: "12"}]
  },
]




const crm = new DomComponents({
  selector: '#app',
  components: [Table],
  data: arr
  /* сейчас массив с обхектами, позднее будет согздание класса для рработы с API. В компанент попадает весь класс. А уже в каждом компоненте персональная обработка..(прим. в Table массив с клиентами. */
})
crm.init()



tippy('[data-tippy-content]', {
  theme: 'custom',
})




