// Background Generator Files
// Section 11, Lecture 111
// Below you will find the 3 files for the Background Generator. A few things you can try: 

// 1. Write code so that the colour inputs match the background generated on the first page load. 

// 2. Display the initial CSS linear gradient property on page load.

// 3. BONUS: Add a random button which generates two random numbers for the colour inputs.

//selects the h3 tag -  we only have one of these in our code
let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");

// we want to grab background style
let body = document.getElementById("gradient");

//change style of background
function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

	//textContent = createTextNode = innerHTML
	//textContent adds a text content
	css.textContent = body.style.background + ";";
}
// Question 1 Answer
// display gradient on page load
window.onload = setGradient();

// Randomise colors!
let random = document.getElementById("random");

function randomColor() {
	// the magic of Math struck (16777215 == ffffff in decimal):
	let randomColor1 = '#'+Math.floor(Math.random()*16777215).toString(16);
	let randomColor2 = '#'+Math.floor(Math.random()*16777215).toString(16);
//DIFFERENT WAY OF GETTING HEX VALUES
 //  	let letters = '0123456789ABCDEF';
 //  	let randomColor1 = '#';
 //  	for (let i = 0; i < 6; i++) {
 //    	randomColor1 += letters[Math.floor(Math.random() * 16)];
	// }

	// let randomColor2 = '#';
 //  	for (let i = 0; i < 6; i++) {
 //    	randomColor2 += letters[Math.floor(Math.random() * 16)];
	// }

	color1.value = randomColor1;
	color2.value = randomColor2;

	body.style.background = "linear-gradient(to right," + color1.value + "," + color2.value + ")";

	css.textContent = body.style.background + ";"
}

random.addEventListener("click",randomColor);





// input is same as mouseenter etc - it is listening for input
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);


// color1.addEventListener("input", function() {
// 	// console.log(color1.value);
// })

// color2.addEventListener("input", function() {
// 	console.log(color2.value);
// })