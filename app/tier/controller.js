import Ember from 'ember';

export default Ember.Controller.extend({
	applicationController:Ember.inject.controller('application'),

	showHref:Ember.computed('applicationController.currentPath',{
		get(){
			let path = this.get('applicationController.currentPath');
			return path.endsWith('href');
		}
	})
});
