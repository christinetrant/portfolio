// 1. If you click on the list item, it toggles the .done  class on and off.

// 2. Add buttons next to each list item to delete the item when clicked on its corresponding delete button.

// 3. BONUS: When adding a new list item, it automatically adds the delete button next to it. 
// var deleteButton = document.createElement("button");


//selecting the elements we will be needing and caching it for future use
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
//Event Delegation
//Maake ul the subject as it is the parent controlling current and future children - this class is defined in html
var shopList = document.querySelector('.shoppingList');
//get all list items
var listItems=document.getElementsByTagName("li"); 

//function declarations waiting to be called
function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);	

	// clears input box after enter
	input.value = "";

	//Adds a delete button after each input
	var deleteButton = document.createElement("button");
	deleteButton.appendChild(document.createTextNode("Delete"));
	li.appendChild(deleteButton);
	ul.appendChild(li);
	deleteButton.onclick = removeParent;
}
//adds item to bottom of list when button is clicked
function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}
//adds item to bottom of list when enter is hit
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}
//toggles the list when it is done
function toggleDone(event) {
	// console.log(event.target, "clicked!");
	event.target.classList.toggle("done");
}
// when delete button is pressed this will remove the parent e.g. list item
function removeParent(event){
	event.target.parentNode.remove();
}


function deleteButton() {
	var btn=document.createElement("button");
	btn.appendChild(document.createTextNode("Delete"));
	listItems[i].appendChild(btn);
	btn.onclick=removeParent;
}

for (i=0; i<listItems.length; i++) {
	deleteButton();
}

//add an eventlistener so if anyone clicks on button run this function
button.addEventListener("click", addListAfterClick);
//if there's a keypress in input run this function
input.addEventListener("keypress", addListAfterKeypress);
//event listener for toggle list
shopList.addEventListener('click', toggleDone);