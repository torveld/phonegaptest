function add(amount) {
	var numb = parseInt(document.getElementById("number").innerHTML);
	numb += amount;
	localStorage.setItem("number", numb);
	document.getElementById("number").innerHTML = numb;
	
}

function subtract(amount) {
	var numb = parseInt(document.getElementById("number").innerHTML);
	numb -= amount;
	localStorage.setItem("number", numb);
	document.getElementById("number").innerHTML = numb;
}

function getStorage() {
    var item = localStorage.getItem("number");
	
	if(item != null) {
		document.getElementById("number").innerHTML = item;
	}
}

