import '@/index.html'
import '@css/main.scss'
import '@css/media.scss'

import {Table} from '@/js/Table/Table';
import {DomComponents} from '@/js/DOM/DomComponents';


const crm = new DomComponents({
  selector: '#app',
  components: [Table]
})
crm.init()
