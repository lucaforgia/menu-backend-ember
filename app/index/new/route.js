// import Ember from 'ember';
import NewTierRoute from 'menu-backend-ember/base/tier/new/route';

export default NewTierRoute.extend({
	model(){

		var root = this.modelFor('application');
		// var root = all.filterBy('parent',null).get('firstObject');

		var newTier = this.store.createRecord('tier',{sort:1000000});
		newTier.set('parent',root);

		return newTier;
	},
	afterSave(){
		this.transitionTo('index');
	}
});
