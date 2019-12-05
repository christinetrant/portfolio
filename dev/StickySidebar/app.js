//Will need a debounce function maybe as scroll events are constant!

let treat1 = document.getElementById("part-0").offsetTop;
let treat2 = document.getElementById("part-1").offsetTop;
let treat3 = document.getElementById("part-2").offsetTop;

// 'const' becase we set only once but if we want to be responsive we would have as normal 'var' and update these values everytime the user resizes window.
// we could do this with:  window.onresize = functionToHandleResizeEvent();
/*  NEEDS WORK!!!  */
/*
window.addEventListener("resize", go);
function go() {
  treat1 = document.getElementById("part-0").offsetTop;
//  console.log("resizing " + treat1);
  treat2 = document.getElementById("part-1").offsetTop;
  treat3 = document.getElementById("part-2").offsetTop;
}   */

/* function reportWindowSize() {
  heightOutput.textContent = window.innerHeight;
  widthOutput.textContent = window.innerWidth;
}

window.onresize = reportWindowSize;
 */
// if we wanted to run the treat function only when the user scrolls in the main div we could add 'onscroll="myTreat()' to the the main div in the html, eg: <div class="main" onscroll="myTreat()> More efficient but for a page this simple this is fine too.

/* let el = document.getElementsByClassName('main');
el.onscroll = function() { treat() }; */

let i = document.getElementById("item");
let p = document.getElementById("price");
let side = document.getElementById("sidenav");

let myTreats = {
  cakes: ["Velvet Cupcake", "Chocolate Brownie", "Oreo Cheescake"],
  cost: ["1.99", "2.99", "10.99"],
  bg: ["#BF9ACA", "#B5D3DD", "#E7EFC5"],
  information: function(el) {
    i.textContent = this.cakes[el];
    p.textContent = this.cost[el];
    side.style.background = this.bg[el];
  }
};

// function for each section to show the sidebar
function sideShow() {
  side.style.display = "block";
  side.style.visibility = "visible";
  side.style.opacity = 1;
  side.style.animation = "fade 1s";
}

function sideHide() {
  side.style.display = "none";
  side.style.visibility = "hidden";
  side.style.opacity = 0;
}

/**
 * Runs everytime the oncroll event is triggered.
 * Check current window scroll value against our saved values for each sidebar item
 * NOTE: If we wanted to improve the efficiency of this we could do something to limit the number of times this function is called as the oncroll event gets fired a crazy amount of time.
 */
function treat() {
  var x = 0;
  // console.log("Hello - scrolled " + (x += 1) + " times");
  let currentScrollPosition = window.scrollY;
  //Make a for loop?  Make a function!
  if (currentScrollPosition >= treat1 && currentScrollPosition <= treat2) {
    sideShow();
    myTreats.information(0);

    /* i.textContent = cakes[0];
    p.textContent = cost[0];
    side.style.background = bg[0]; */
  } else if (
    currentScrollPosition > treat2 &&
    currentScrollPosition <= treat3
  ) {
    sideShow();
    myTreats.information(1);

    /* i.textContent = this.cakes[1];
    p.textContent = cost[1];
    side.style.background = bg[1]; */
  } else if (currentScrollPosition > treat3) {
    sideShow();
    myTreats.information(2);

    /* i.textContent = cakes[2];
    p.textContent = cost[2];
    side.style.background = bg[2]; */
  } else if (currentScrollPosition !== (treat1 || treat2 || treat3)) {
    sideHide();
  }
}

// DEBOUNCE FUNCTION TO LIMIT NUMBER OF SCROLL EVENTS FIRING
function debounce(func, wait = 15, immediate = true) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

// listens out for scroll event and calls the treat function
//window.addEventListener("scroll", treat);

// instead of event listener for treat - we wrap it within the debounce function to limit times it is triggered
window.addEventListener("scroll", debounce(treat));
