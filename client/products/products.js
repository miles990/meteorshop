Template.products.catnotselected = function(){			      
	return Session.equals('category', null);
}

Template.products.category = function(){
	return Session.get('category');
}

Template.products.productlist = function() {
	return Products.find({catName:Session.get('category')});
};

Template.product.currency = function(num){
	return "$" + Number(num).toFixed(2);
};

Template.cart.cartitems = function(){
	var shopCart = [];
	var cartItems = CartItems.find();
	var total = 0;
	cartItems.forEach(function (cartitem) {
		var product = Products.findOne({_id:cartitem.product});
		cartitem.productname = product.name;
		cartitem.price = (Number(product.price) * cartitem.qty);
		total += cartitem.price;
		shopCart.push(cartitem);
	});
	shopCart.subtotal = total;
	shopCart.tax = shopCart.subtotal * .06;
	shopCart.total = shopCart.subtotal + shopCart.tax;
	return shopCart;
};

Template.product.events({
	'click .addcart': function (evt, tmpl) {
		var qty = tmpl.find('.prodqty').value;
		var product = this._id;
		var sessid = Meteor.default_connection._lastSessionId;
		Meteor.call('addToCart', qty, product, sessid);
	}
});