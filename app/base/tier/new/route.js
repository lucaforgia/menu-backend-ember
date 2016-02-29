import Ember from 'ember';



export default Ember.Route.extend({
	currentModel: null,
	afterSave() {},

	deactivate() {
		this.get('currentModel').rollbackAttributes();
	},
	actions: {
		willTransition(transition) {
				var title = this.get('currentModel.title') || '';
				if (this.get('currentModel.hasDirtyAttributes') && title.replace(/[ ]g/,'') !== '') {
					var confirm = window.confirm(
						'You did some unsaved changes on the subtiers. Are you sure you want to discard these?'
					);
					if (!confirm) {
						transition.abort();
						window.history.forward();
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
