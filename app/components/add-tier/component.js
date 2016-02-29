import Ember from 'ember';

export default Ember.Component.extend({
	classNames: ['new_tier_panel'],
	init(){
		Ember.run.scheduleOnce('afterRender', this, function() {
			this.$('input.ember-text-field').focus();
        });
		return this._super(...arguments);
	},
	keyDown(event){
		if(event.keyCode === 13){
			return this.validate(this.get('node'));
		}
		this.sendAction('action',event.keyCode);
	},
	validate(model){
		var title = model.get('title') || '';
		if(title.replace(/[ ]g/,'') === ''){
			alert('set a proper title');
		}
		else{
			this.sendAction('saveChild', model);
		}
	},
	actions: {
		saveChild(model) {
			this.validate(model);
		}
	}
});
