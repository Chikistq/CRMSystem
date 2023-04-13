
export class Exchange {
  constructor() {
    this.name = 'Exchange'
    this.url = 'http://localhost:3000/api/clients'
    this.response = ''
    this.data = []
  }

  async getData() {
    this.data = (await data(this.url)).data
    this.response = (await data(this.url)).status
  }

  async delete(id) {
    const response = await fetch(`${this.url}/${id}`, {
      method: 'DELETE',
    })
    if (response.status === 404) console.log('Не удалось удалить студента, так как его не существует')
  }

  async create(obj) {
    await createNewCl(obj, this.url)
    await this.getData()

    // this.response = (await createNewCl(obj, this.url))
  }

  async change(obj, id) {
    await changeCl(obj, id)
    await this.getData()
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
  });
  console.log('отправленный объект', await response.json())

}

