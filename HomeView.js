var HomeView = function(store) {
	this.initialize = function() {
			// Define a div wrapper for the view. The div wrapper is used to attach events.
			this.el = $('<div/>');
			this.el.on('keyup', '.search-key', this.findByName);
		};
 
    this.initialize();
}

this.render = function() {
    this.el.html(HomeView.template());
    return this;
};

HomeView.template = Handlebars.compile($("#home-tpl").html());
HomeView.liTemplate = Handlebars.compile($("#employee-li-tpl").html());