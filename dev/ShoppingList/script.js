//selecting the elements we will be needing and caching it for future use
let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");

//Event Delegation
//Make ul the subject as it is the parent controlling current and future children - this class is defined in html
let shopList = document.querySelector(".shoppingList");
//get all list items
let listItems = document.getElementsByTagName("li");

//function declarations waiting to be called
function inputLength() {
  return input.value.length;
}

function createListElement() {
  let li = document.createElement("li");
  let span = document.createElement("span");
  li.appendChild(span);
  span.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);

  // clears input box after enter
  input.value = "";

  //Adds an edit button after each input
  // let editButton = document.createElement("button");
  // editButton.appendChild(document.createTextNode("edit"));
  // li.appendChild(editButton);
  // ul.appendChild(li);
  // editButton.onclick = editItem;

  //Adds a delete button after each input
  // let deleteButton = document.createElement("button");
  // deleteButton.appendChild(document.createTextNode("X"));
  // li.appendChild(deleteButton);
  // ul.appendChild(li);
  // deleteButton.onclick = removeParent;
  let btn = document.createElement("button");
  var del = document.createElement("i");
  btn.appendChild(del);
  btn.classList.add("btn", "fa", "fa-trash");
  li.appendChild(btn);
  btn.onclick = removeParent;
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
  // DON'T THINK I NEED THIS
  //event.target.firstElementChild.classList.add("hidden");

  // let icon = event.target.firstElementChild.firstElementChild;
  // icon.parentNode.style.textDecoration = "none";
  // console.log(event.target.firstElementChild.firstElementChild, "clicked!");
  // event.target.getElementsByTagName("button").className = "";
  // event.target.classList.getElementsByTagName("button").removeClass("done");
}
// when delete button is pressed this will remove the parent e.g. list item
function removeParent(event) {
  event.target.parentNode.remove();
}

// function editItem(event) {
//   //   //event.target.parentNode.firstChild.contentEditable = true;
//   //   //document.getElementsByTagName("li.firstChild").contentEditable = true;
//   // console.log("clicked!" + event.target.parentNode.firstElementChild);
//   // let editMe = (event.target.parentNode.firstElementChild.contentEditable = true);
//   // editMe.focus();

//   //   //or you can use list.setAttribute("contentEditable", true);
//   event.target.parentNode.firstElementChild.setAttribute(
//     "contenteditable",
//     "true"
//   );

  // }
  //   event.target.parentNode.firstChild.contentEditable = true;
// }

let i;
for (i = 0; i < listItems.length; i++) {
  // editButton();
  deleteButton();
}

// function editButton() {
//   let btn = document.createElement("button");
//   var edit = document.createElement("i");
//   btn.appendChild(edit);
//   btn.classList.add("btn", "fa", "fa-pencil");
//   listItems[i].appendChild(btn);
//   btn.onclick = editItem;

  // var list = document.querySelector("ul");
  // var editList = document.querySelector(".edit-list");

  // editList.onclick = function() {
// }

function deleteButton() {
  let btn = document.createElement("button");
  var del = document.createElement("i");
  btn.appendChild(del);
  btn.classList.add("btn", "fa", "fa-trash");
  listItems[i].appendChild(btn);
  btn.onclick = removeParent;
}

//add an eventlistener so if anyone clicks on button run this function
button.addEventListener("click", addListAfterClick);
//if there's a keypress in input run this function
input.addEventListener("keypress", addListAfterKeypress);
//event listener for toggle list
shopList.addEventListener("click", toggleDone);

// shopList.addEventListener("click", editItem);
