import Ember from 'ember';

export default Ember.Route.extend({
	currentModel:null,

	model(params){
		let currentModel;
		// alert(this.modelFor('application').objectAt(6));
		// this.modelFor('application');
		// currentModel = this.store.findRecord('tier',params.tier_id);
		// this.set('currentModel',currentModel);
		// return currentModel;
		if(!this.store.hasRecordForId('tier',params.tier_id)){
			return this.transitionTo('index');
		}
		return this.store.peekRecord('tier',params.tier_id);
		// return this._super(params);
	},
	afterModel: function(tier) {
		// alert(tier)
		if (tier.get('children').length !== 0) {
			this.transitionTo('tier.children', tier.get('id'));
		}
		else{
			this.transitionTo('tier.href', tier.get('id'));
		}
	},
	actions:{
		save(){
			var _t = this;
			var model = _t.modelFor('tier');
			if(model.get('hasDirtyAttributes')){
				model.save().then(function(){
					// _t.transitionTo('tier.children');
				});
			}
		},
		goToHref(model){
			var _t = this;
			var children = model.get('children');
			if(children.length !== 0){
				let confirm = window.confirm('Are you sure? This will remove all the descendant sub-tiers...');
				if(confirm){
					;(function(){
						var i;

						i = children.length - 1;
						var child = children.objectAt(i);
						while(child){
							console.log('on while '+ child.get('id'));
							_t.send('removeTier',child);
							--i;
							child = children.objectAt(i);
						}

					})();
					this.transitionTo('tier.href');
				}
			}
		}
	}
});
