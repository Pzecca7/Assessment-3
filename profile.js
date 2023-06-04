const colorBtn = document.querySelector('#color')
const placeBtn = document.querySelector('#place')
const ritualBtn = document.querySelector('#ritual')

const alertFvtColor = evt => {
    alert('My favorite color is blue!')

}

const alertFvtPlace = evt => {
    alert('My favorite place is Yankee Stadium on a beautiful weekend afternoon.')
}

const alertFvtRitual = evt => {
    alert('My favorite ritual is having a homemade Italian sunday dinner every week.')
}

colorBtn.addEventListener('click', alertFvtColor)
placeBtn.addEventListener('click', alertFvtPlace)
ritualBtn.addEventListener('click', alertFvtRitual)