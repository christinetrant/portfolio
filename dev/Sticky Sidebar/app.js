// document.getElementById("part-0").onscroll = treat();
// document.getElementById("part-1").onscroll = treat();
// document.getElementById("part-2").onscroll = treat();

window.onscroll = function() { treat() };

function treat() {
	if (document.getElementById('part-0')) {
	 document.getElementById('item').textContent = "Velvet Cupcake";
	 document.getElementById('price').textContent = "1.99";
	} else if (document.getElementById('part-1')) {
	  document.getElementById('item').textContent = "Chocolate Brownie";
	  document.getElementById('price').textContent = "2.99";
	} else if (document.getElementById('part-2')) {
	  document.getElementById('item').textContent = "Oreo Cheescake";
	  document.getElementById('price').textContent = "10.99";
	} else {
      document.getElementById('item').textContent = "";
	  document.getElementById('price').textContent = "";
  }
}