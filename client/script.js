import { SERVER_URL } from './api.js'
import { renderAllProducts, renderProduct } from './utils/renderData.js'
import UserRequests from './utils/userRequests.js'

const ul1 = document.querySelector('.ul1')
const ul2 = document.querySelector('.ul2')
const nameI = document.querySelector('.nameI')
const priceI = document.querySelector('.priceI')
const btn = document.querySelector('.btnAdd')
const check = document.querySelector('.check')

window.addEventListener('load', async () => {
	const users = await UserRequests.getUsers(`${SERVER_URL}/api/getUsers`)
	renderAllProducts(users, ul1)
})

window.addEventListener('load', async() => {
	const users = await UserRequests.getUsers(`${SERVER_URL}/api/getUsers`)
	renderProduct(users, ul2)
})

check.addEventListener('click', () => {
	if(!check.classList.contains('checked')) {
		check.classList.add('checked')
	}else {
		check.classList.remove('checked')
	}
})

btn.addEventListener('click',async () => {
	if(!check.classList.contains('checked')) {
		let name = nameI.value
		let sname = +priceI.value
		let onSale = false
		await UserRequests.addUser(`${SERVER_URL}/api/addUser`, {name, sname, onSale})
		location.reload()
	}
	if(check.classList.contains('checked')) {
		let name = nameI.value
		let sname = +priceI.value
		let onSale = true
		await UserRequests.addUser(`${SERVER_URL}/api/addUser`, {name, sname, onSale})
		location.reload()
	}
})