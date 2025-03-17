import UserRequests from "./userRequests.js"
import { SERVER_URL } from "../api.js"

export const renderAllUsers =  (users, renderTo) => {
	renderTo.innerHTML = ''
	let i = 0
	users.forEach(user => {
		i++
		renderTo.insertAdjacentHTML(`beforeend`, `<li class="list${i}"><div class="li${i}"><div class="user${i}">${user.name}</div></div> <input type="text" class="input${i} input" placeholder="${user.name}"> <div class="edit${i} editBtn">V</div><div class="dlt${i} dltBtn" style="z-index: 100;">X</div></li>`)
		let i2 = i
		document.querySelector(`.dlt${i}`).addEventListener('click', async () => {
			await UserRequests.deleteUser(`${SERVER_URL}/api/deleteUser`, `${user._id}`)
			document.querySelector(`.list${i2}`).remove()
		})
		document.querySelector(`.li${i}`).addEventListener('click', () => {
			
			document.querySelector(`.input${i2}`).classList.add('zi')
			document.querySelector(`.edit${i2}`).classList.add('zi')

			document.querySelector(`.edit${i2}`).addEventListener('click', async () => {
			let name = document.querySelector(`.input${i2}`).value
				try {
					await UserRequests.patchUser(`${SERVER_URL}/api/updateUser`, `${user._id}`, {name})
					document.querySelector(`.user${i2}`).innerHTML = ''
					document.querySelector(`.user${i2}`).innerHTML =`${name}`
					document.querySelector(`.input${i2}`).classList.remove('zi')
					document.querySelector(`.edit${i2}`).classList.remove('zi')
					console.log(name)
				}catch (err) {
					console.error('Ошибка', err)
				}
			})
		})
	})
}

export const renderUser = (user, renderTo) => {
	renderTo.insertAdjacentHTML(`beforeend`, `<p>${user.name}</p>`)
}
