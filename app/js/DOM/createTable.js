import {contactIcon} from '@/js/DOM/icons';




export function generateRow(obj) {
  const tr = document.createElement('tr')
  tr.classList.add('table__body-row')
  tr.dataset.id = obj.id
  const tdId = `
      <td class="table__body-row-id col col-2" scope="row">${obj.id}</td>`
  const tdBtn = ` 
      <td class="table__body-row-action col col-5 action" scope="col">
        <a class="action__change a-link" data-rowId="${obj.id}" href="/">

          <svg class="action__change-icon" width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 10.5V13H2.5L9.87333 5.62662L7.37333 3.12662L0 10.5ZM11.8067 3.69329C12.0667 3.43329 12.0667 3.01329 11.8067 2.75329L10.2467 1.19329C9.98667 0.933291 9.56667 0.933291 9.30667 1.19329L8.08667 2.41329L10.5867 4.91329L11.8067 3.69329Z" fill="#9873FF"/>
          </svg>
          Изменить
        </a>
        <a class="action__delete a-link" data-rowId="${obj.id}" href="/">
          <svg class="action__delete-icon" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 0C2.682 0 0 2.682 0 6C0 9.318 2.682 12 6 12C9.318 12 12 9.318 12 6C12 2.682 9.318 0 6 0ZM6 10.8C3.354 10.8 1.2 8.646 1.2 6C1.2 3.354 3.354 1.2 6 1.2C8.646 1.2 10.8 3.354 10.8 6C10.8 8.646 8.646 10.8 6 10.8ZM8.154 3L6 5.154L3.846 3L3 3.846L5.154 6L3 8.154L3.846 9L6 6.846L8.154 9L9 8.154L6.846 6L9 3.846L8.154 3Z" fill="#F06A4D"/>
          </svg>
          Удалить
        </a>
      </td>`
  const name = `
      <td class="table__body-row-name col col-8-5">${obj.surname} ${obj.name} ${obj.lastName}</td>
     `
  const createdAt = `
      <td class="table__body-row-create col col-4-5">${getData(obj.createdAt)} <span class="time">${getTime(obj.createdAt)}</span></td>
     `
  const updatedAt = `
      <td class="table__body-row-change col col-4">${getData(obj.updatedAt)} <span class="time">${getTime(obj.createdAt)}</span></td>
     `


  tr.insertAdjacentHTML("beforeend", tdId)
  tr.insertAdjacentHTML("beforeend", name)
  tr.insertAdjacentHTML("beforeend", createdAt)
  tr.insertAdjacentHTML("beforeend", updatedAt)
  tr.append(getContact(obj))
  tr.insertAdjacentHTML("beforeend", tdBtn)



  return tr
}


function getContact(obj =[]) {
  const td = document.createElement('td')
  td.classList.add('table__body-row-contacts')
  td.classList.add('col')
  td.classList.add('col-4')
  obj.contacts.forEach(item => {
    const icon = contactIcon(item.value)[item.type]
    td.insertAdjacentHTML("beforeend", icon)
  })


  return td
}


function getData(objDate) {
  const data = new Date(objDate)
  const y = data.getFullYear()
  let m = data.getMonth()
  let d = data.getDate()
  if (m < 10) {
    m = '0' + m
  }
  if (d < 10) {
    d = '0' + d
  }
  return d + '.' + m + '.' + y
}

function getTime(objDate) {
  const data = new Date(objDate)
  let m = data.getMinutes()
  let s = data.getSeconds()
  if (m < 10) {
    m = '0' + m
  }
  if (s < 10) {
    s = '0' + s
  }
  return m + ':' + s
}
