import Ember from 'ember';

var {get} = Ember;

export default Ember.Component.extend({
	tagName:'ul',
	showChildren:true,
	classNames:['menu_list'],
	classNameBindings:['hasParent:no-padding-left'],

	hasParent:Ember.computed('node',{
		get(){
			if(!get(this,'node.parent')){
				return true;
			}
		}
	}),

	actions:{
		removeTier(model, ask){
			this.sendAction('removeTier',model, ask);
		},
		moveTier(targetId,movedId, side){
			this.sendAction('moveTier',targetId,movedId, side);
			return false;
		}
	}
});
