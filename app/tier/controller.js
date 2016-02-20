import Ember from 'ember';

export default Ember.Controller.extend({
	needs:['application'],
	oldTitle:null,
	showHref:false,
	showChildren:false,

	showObserver:Ember.observer('controllers.application.currentPath',function(){
		var path = this.get('controllers.application').get('currentPath');
		var isHref = path.endsWith('href');
		this.set('showHref',isHref);
		this.set('showChildren', !isHref);
	}),

	staticTitle:Ember.computed('model.title',{
		get(){
			var title = this.get('model.title');
			if(this.get('model').get('hasDirtyAttributes')){
				return this.get('oldTitle');
			}
			this.set('oldTitle', title);
			return title;
		}
	}),

	// actions:{
	// 	radioChange(value,id){
	// 		this.transitionToRoute(value,id);
	// 	}
	// }
});
