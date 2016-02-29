import Ember from 'ember';

export default Ember.Route.extend({
	currentModel:null,
	model(){
		var currentModel = this.modelFor('tier');
		this.set('currentModel',currentModel);
		return currentModel;
	},
	renderTemplate: function() {
		this.render('tier/href', {   // the template to render
			outlet: 'href'              // the name of the outlet in that template
		});
	},
	actions:{
		willTransition(transition){
			if(this.get('currentModel').get('hasDirtyAttributes')){

				var confirm = window.confirm('There are unsaved changes. Are you sure you want withdraw them?');
				if(!confirm){
					transition.abort();
				}
			}
		},
		save:function () {
			var currentModel = this.get('currentModel');
			if(currentModel.get('hasDirtyAttributes')){
				currentModel.save();
			}
		}
	}
});
