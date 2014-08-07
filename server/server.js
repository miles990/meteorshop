Meteor.startup(function(){
	if(Products.find().count() === 0){
		
	}
	if(Categories.find().count() === 0){
		var hwid = Categories.insert({name:'HARDWARE'});
		var juid = Categories.insert({name:'JUICE'});
	}
});