import Ember from 'ember';

export default Ember.Component.extend({
	classNames: ['new_tier_panel'],
	actions: {
		saveChild(model) {
			this.sendAction('saveChild', model);
		}
	}
});
