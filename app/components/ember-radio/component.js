import Ember from 'ember';

export default Ember.Component.extend({
	actions:{
		onChange(value,id){
			this.sendAction('radioChange',value,id);
		}
	}
});
