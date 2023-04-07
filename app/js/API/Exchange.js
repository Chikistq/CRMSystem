
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

  async deleteCl(id) {
    const response = await fetch(`${this.url}/${id}`, {
      method: 'DELETE',
    })
    if (response.status === 404) console.log('Не удалось удалить студента, так как его не существует')
  }

  async create(obj) {
    await createNewCl(obj, this.url)
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
    const obj = {type: item['type'], value: item['value']}
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
