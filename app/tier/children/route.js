import Ember from 'ember';

export default Ember.Route.extend({
	// currentModel:null,
	// model(){
	// 	var _currentModel = this.modelFor('tier');
	// 	this.set('currentModel',_currentModel);
	// 	return _currentModel;
	// },
	renderTemplate: function() {
		this.render('tier/children', {   // the template to render
			outlet: 'children'              // the name of the outlet in that template
		});
	},
});
