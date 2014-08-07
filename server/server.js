Meteor.startup(function(){
	if(Products.find().count() === 0){
		Products.insert({thumb:'applepie.jpeg', name:'Apple Pie', desc:'Decadent Apple Pie', price:2.50, catName:'Fruity'});
	}
	if(Categories.find().count() === 0){
		var hwid = Categories.insert({name:'HARDWARE'});
		var juid = Categories.insert({name:'JUICE'});
		SubCategories.insert({name:'Mods',cat:hwid});
		SubCategories.insert({name:'Fruity',cat:juid});
		SubCategories.insert({name:'Sweet',cat:juid});
	}
});

Meteor.methods({
	removeAll:function(){
		Products.remove({});
		Categories.remove({});
		SubCategories.remove({});
		CartItems.remove({});
	}
});