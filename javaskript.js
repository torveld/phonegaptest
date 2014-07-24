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
	var self = this;
    var item = localStorage.getItem("number");
	
	if(item != null) {
		self.showAlert('Number gathered from local storage', 'info');
		document.getElementById("number").innerHTML = item;
	} else {
		self.showAlert('No number in local storage, start at 0', 'info');
	}
}

function showAlert(message, title) {
    if (navigator.notification) {
        navigator.notification.alert(message, null, title, 'OK');
    } else {
        alert(title ? (title + ": " + message) : message);
    }
}