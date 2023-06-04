console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	// console.log('form submit');

	alert("The form has been submited.")
}

function complimentUser(evt) {
	
	alert("Give the User a compliment")
}


let form = document.querySelector('#contact');
let catPic = document.querySelector('#russian-blue')

form.addEventListener('submit', handleSubmit);
catPic.addEventListener('mouseover', complimentUser)



