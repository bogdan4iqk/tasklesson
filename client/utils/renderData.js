import UserRequests from "./userRequests.js"
import { SERVER_URL } from "../api.js"

export const renderAllProducts = (users, renderTo) => {
	renderTo.innerHTML = ''
	let i = 0
	users.forEach(user => {
		if(user.onSale == true) {
			renderTo.insertAdjacentHTML(`beforeend`, `<li><div>${user.name}</div> <div style="text-decoration: line-through">${user.sname}.00$</div> ${user.sname - user.sname * 0.25}$</li>`)
		}else {
			renderTo.insertAdjacentHTML(`beforeend`, `<li><div>${user.name}</div> ${user.sname}.00$</li>`)
		}
	})
}

export const renderProduct = (users, renderTo) => {
	renderTo.innerHTML = ''
	users.forEach(user => {
		if(user.onSale == true) {
			renderTo.insertAdjacentHTML(`beforeend`, `<li><div>${user.name}</div> <div style="text-decoration: line-through">${user.sname}.00$</div> ${user.sname - user.sname * 0.25}$</li>`)
		}
	})
}
