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
		//self.registerEvents();
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

function registerEvents() {
    var self = this;
    // Check of browser supports touch events...
    if (document.documentElement.hasOwnProperty('ontouchstart')) {
        // ... if yes: register touch event listener to change the "selected" state of the item
        $('body').on('touchstart', 'a', function(event) {
            $(event.target).addClass('tappable-active');
        });
        $('body').on('touchend', 'a', function(event) {
            $(event.target).removeClass('tappable-active');
        });
    } else {
        // ... if not: register mouse events instead
        $('body').on('mousedown', 'a', function(event) {
            $(event.target).addClass('tappable-active');
        });
        $('body').on('mouseup', 'a', function(event) {
            $(event.target).removeClass('tappable-active');
        });
    }
}