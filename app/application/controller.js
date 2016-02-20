import Ember from 'ember';

export default Ember.Controller.extend({
	isRoot: Ember.computed('currentPath',{
		get(){
			return this.get('currentPath') === 'index';
		}
	})
});
