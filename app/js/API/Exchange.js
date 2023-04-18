
export class Exchange {
  constructor() {
    this.name = 'Exchange'
    this.url = 'http://localhost:3000/api/clients'
    this.response = ''
    this.data = []
    this.errorMss = ''
  }

  async getData() {
    this.data = (await data(this.url)).data
    this.response = (await data(this.url)).status
  }

  async delete(id) {
    const response = await fetch(`${this.url}/${id}`, {
      method: 'DELETE',
    })

  }

  async create(obj) {
    const create = createNewCl.bind(this)
    await create(obj, this.url)

  }

  async change(obj, id) {
    const change = changeCl.bind(this)
    await change(obj, id)
  }

  async searchBd(req) {
    const srch = searchCl.bind(this)
    this.data = await srch(`${this.url}?search=${req}`)
  }



}

async function data(url) {
  const response = await fetch(url)
  const data = await response.json()
  return {status: response.status, data: data}
}

async function createNewCl(obj, url) {
  const arr = []
  obj.contacts.forEach(item => {
    const value = item.phone || item.vk || item.fb || item.other || item.mail
    const type = Object.keys(item)[0]
    const obj = {type: type, value: value}
    arr.push(obj)
  })

  const response = await fetch(url, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      name: obj.name,
      lastName: obj.lastName,
      surname: obj.surname,
      contacts: arr
    })
  });

  if (response.status === 422) {
    const mess = await response.json()
    let messDone = ''
    mess.errors.forEach(obj => {
      messDone += obj.message + '. '
    })
    this.errorMss = messDone
  }

  this.response = response.status
}

async function changeCl(obj, id) {
  const arr = []
  obj.contacts.forEach(item => {
    const value = item.phone || item.vk || item.fb || item.other || item.mail
    const type = Object.keys(item)[0]
    const obj = {type: type, value: value}
    arr.push(obj)
  })

  const response = await fetch(`http://localhost:3000/api/clients/${id}`, {
    method: 'PATCH',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      // id: obj.id,
      name: obj.name,
      lastName: obj.lastName,
      surname: obj.surname,
      contacts: arr
    })
  })

  this.response = response.status

  if (response.status === 422) {
    const mess = await response.json()
    let messDone = ''
    mess.errors.forEach(obj => {
      messDone += obj.message + '. '
    })
    this.errorMss = messDone
  }

}

async function searchCl(url) {
  const response = await fetch(url, {
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
  })

  const r = await response.json()
  return r
}

