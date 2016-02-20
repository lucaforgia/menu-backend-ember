import Ember from 'ember';


export default Ember.Component.extend({
	classNames:['drop-in'],

	isSame(event){
		var movedId = event.dataTransfer.getData('text/plain');
		var targetId = this.get('node.id');
		return targetId === movedId;
	},

	dragLeave(event) {
		event.preventDefault();
		var $ele = this.$(); 
		$ele.removeClass('selected');
		$ele.find('.tooltip').first().hide();
	},

	dragOver(event) {
		event.preventDefault();
		if(!this.isSame(event)){
			var $ele = this.$(); 
			$ele.addClass('selected');
			$ele.find('.tooltip').first().show();
		}
	},

	drop(event) {
		this.$().removeClass('selected');
		this.$().find('.tooltip').first().hide();
		var movedId = event.dataTransfer.getData('text/plain');
		var targetId = this.get('node.id');
		if(!this.isSame(event)){
			this.sendAction('tierDropped',targetId, movedId);
		}
		return false;
	}
});
