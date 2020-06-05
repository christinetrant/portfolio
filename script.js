// When the user scrolls down 20px from the top of the document, show the button
let scrollToTop = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTop.style.display = "block";
  } else {
    scrollToTop.style.display = "none";
  }
});
// When the user clicks on the button, scroll to the top of the document
scrollToTop.addEventListener('click', function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

/********************************/
/***     PORTFOLIO FILTER     ***/
/********************************/
//Hide "JavaScript disabled" error message when JavaScript loads
document.getElementById("gallery__filters__message").style.display = "none";

//On page load, show all thumbnails
filterSelection("all")

// Function to filter images
//The filterSelection() function looks for the CSS class named in the parameter, here variable "filter"
function filterSelection(filter) {
  let galleryItem, i;
  galleryItem = document.getElementsByClassName("gallery-item");
  if (filter == "all") filter = "";
  // Add the "filter-show" class (display:block) to the filtered elements, and remove the "filter-show" class from the elements that are not selected
  for (i = 0; i < galleryItem.length; i++) {
    removeFilter(galleryItem[i], "filter-show");
    if (galleryItem[i].className.indexOf(filter) > -1) addFilter(galleryItem[i], "filter-show");
  }
}

//  Function to show filtered items (elements)
function addFilter(item, name) {
  //Used in filterSelection() as addFilter(galleryItem[i], "filter-show")
  //Then element is document.getElementsByClassName("gallery__column")[i]
  //Then name is CSS class .filter-show in the above example; filterSelection("nature") would find all nature elements
  //Saves an array listing all the CSS classes an element has (since CSS classes are listed w/spaces in between in HTML)
  let i, arr1, arr2;
  arr1 = item.className.split(" ");
   //Saves an array of number of elements with the .filter-show class as instances of how many times .filter-show occurs
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
     // .indexOf() searches for the occurence of .filter-show in arr2; result of -1 means there are 0 occurrences
    //If the list of CSS classes includes 0 occurrences of .filter-show, then add .filter-show to that element
    if (arr1.indexOf(arr2[i]) == -1) {
      item.className += " " + arr2[i];
    }
  }
}

//  Function to hide items not selected (elements)
function removeFilter(item, name) {
  let i, arr1, arr2;
  arr1 = item.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    // As long as the CSS class list has ANY occurrences of .filter-show...
    while (arr1.indexOf(arr2[i]) > -1) {
      // ...remove the latest occurrence of .filter-show in the CSS class list (removes 1 at a time)
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  // Re-join the ammended CSS class list back to the HTML element
  item.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
let btnContainer = document.getElementById("gallery-filter");
let btns = btnContainer.getElementsByClassName("filter-btn");
// For as many filter buttons are found within the parent container...
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    //If one registers a click then remove the CSS class .active from the old button and give it instead to the new button that registered the click
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    this.className += " active";
  });
}

// Button Event Listeners
document.getElementById('filter-all').addEventListener('click', function() {
  filterSelection("all");
}, false);
document.getElementById('filter-website').addEventListener('click', function() {
  filterSelection("website");
}, false);
document.getElementById('filter-dev').addEventListener('click', function() {
  filterSelection("dev");
}, false);
document.getElementById('filter-design').addEventListener('click', function() {
  filterSelection("design");
}, false);

/**************************/
/***     MODAL CODE     ***/
/**************************/
// Get the modal
let modal = document.getElementById("myModal");
// Get the image and insert it inside the modal - use its "alt" text as a caption
// let img = document.getElementsByClassName("galleryImg");
// Need to get parent of img as the figcaption overlay gets in way so we will select that for modal click
let imgParent = document.getElementsByClassName("effect-milo");
let modalImg = document.getElementById("img01");
let captionText = document.getElementById("caption");
  
//Need a for loop to go through all images and create modals
for (let i=0; i<imgParent.length; i++) {
  imgParent[i].addEventListener('click', function() {
    // if the image class has 'des' then we want to show the modal
    if(this.childNodes[1].classList.contains('des')) {
      modal.style.display = "block";

      // Call the second child <figcaption> as we are looping through parent
      modalImg.src = this.childNodes[1].src;
      let modalLink = this.childNodes[3].querySelector('p').querySelector('a');
      let modalText = this.childNodes[3].querySelector('p');
      // show the caption text and create a link to view webpages - 
      captionText.innerHTML = modalText.textContent;
      //Hide Scroll To Top Button
      scrollToTop.style.display = "none";
    } 
  });
}

// To close using button or clicking outside of modal:
let closeModalButton = document.getElementsByClassName("close")[0];
function closeModal() {
  if (event.target == modal || event.target == closeModalButton) {
    modal.style.display = "none";
  } 
}
// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', closeModal);
// When the user clicks on <span> (x), close the modal
closeModalButton.addEventListener('click', closeModal);
