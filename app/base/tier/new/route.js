import Ember from 'ember';



export default Ember.Route.extend({
	currentModel: null,
	afterSave() {},

	deactivate() {
		this.get('currentModel').rollbackAttributes();
	},
	actions: {
		willTransition(transition) {
				if (this.get('currentModel').get('hasDirtyAttributes')) {
					var confirm = window.confirm(
						'You did some unsaved changes on the subtiers. Are you sure you want to discard these?'
					);
					if (!confirm) {
						transition.abort();
					}
				}
			},
			saveChild(model) {
				var _t = this;
				model.save().then(function() {
					_t.afterSave();
				});
			}
	}
});

// export function cane(){
// 	return 'diomaialla'
// }
