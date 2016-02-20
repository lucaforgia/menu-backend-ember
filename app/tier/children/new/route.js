// import Ember from 'ember';
import NewTierRoute from 'menu-backend-ember/base/tier/new/route';

export default NewTierRoute.extend({
	afterSave(){
		this.transitionTo('tier.children');
	},

	model(){
		var parent = this.paramsFor('tier').tier_id;
		var model = this.store.createRecord('tier',{'title':'fill this meow!'});

		this.store.find('tier',parent).then(function(parentTier){
			model.set('parent',parentTier);
		});
		this.set('currentModel',model);
		return model;
	},
});
