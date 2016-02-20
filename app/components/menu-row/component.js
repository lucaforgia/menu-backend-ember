import Ember from 'ember';

export default Ember.Component.extend({
	tagName:'li',
	attributeBindings : [ 'draggable', 'disable'],
	draggable         : true,


	dragStart(event) {
		// event.preventDefault();
		event.stopPropagation();
		return event.dataTransfer.setData('text/plain', this.get('node.id'));
	},

	// drop(event){
	    // event.preventDefault();
	    // alert('cane')
	    // var data = event.dataTransfer.getData("text/data");
	    // event.target.appendChild(document.getElementById(data));
	// },

	actions:{
		removeTier(model, ask){
			this.sendAction('removeTier',model, ask);
		},
		tierDropped(targetId,movedId){
			this.sendAction('moveTier',targetId,movedId, 'up');
			return false;
		},
		moveTier(targetId, movedId, side){
			this.sendAction('moveTier',targetId,movedId, side);
			return false;
		},
		tierDroppedDown(targetId, movedId){
			this.sendAction('moveTier',targetId,movedId, 'down');
			return false;
		},
		tierDroppedChild(targetId, movedId){
			this.sendAction('moveTier',targetId,movedId, 'child');
			return false;
		}
	}
});
