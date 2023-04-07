export const preloader = `
     <svg class="table__wrap-preload active" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.0002 50.0005C14.0002 69.8825 30.1182 86.0005 50.0002 86.0005C69.8822 86.0005 86.0002 69.8825 86.0002 50.0005C86.0002 30.1185 69.8823 14.0005 50.0003 14.0005C45.3513 14.0005 40.9082 14.8815 36.8282 16.4865" stroke="#9873FF" stroke-width="8" stroke-miterlimit="10" stroke-linecap="round"/>
     </svg>`



export function showRow(cl) {
  cl.forEach(client => {
    const row = document.querySelector(`[data-id="${client.id}"]`)
    row.classList.add('active')
  })

}

export function getUserData() {
  const newUser = {}
  newUser.contacts = []
  Array.from(document.querySelectorAll('[class*="user-"]')).map((item) => {
    newUser[item.id] = item.value
  })
  Array.from(document.querySelectorAll('.item__select')).map((item, value) => {
    const contact = {}
    contact[item.value] = Array.from(document.querySelectorAll('.item__data-input'))[value].value
    newUser.contacts.push(contact)
  })

  return newUser
}
