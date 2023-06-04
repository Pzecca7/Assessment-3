
const randomBtn = document.querySelector('#random-btn')
const randomContainer = document.querySelector(`#random-container`)


const restaurants = [`Limani`, `Chez Catherine`, `Vicki's`, `Ferraro's`, `Fiamma`, `Publick House`, `Sweet Waters`, `Spice Bazaar`]

const randomize = () => {
let randomRestaurant = restaurants[Math.floor(Math.random() * restaurants.length)]

return `${randomRestaurant}`

}



function addRestaurant (evt) {
let newRestaurant = document.createElement('p')
console.log(newRestaurant)
newRestaurant.style.color = 'white'
newRestaurant.textContent= randomize()

randomBtn.addEventListener('click', (evt) => {
    newRestaurant.remove()
})

console.log(newRestaurant)


randomContainer.appendChild(newRestaurant)

}


randomBtn.addEventListener('click', addRestaurant)
