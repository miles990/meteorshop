Template.products.catnotselected = function(){			      
	return Session.equals('category', null);
}

Template.products.category = function(){
	return Session.get('category');
}