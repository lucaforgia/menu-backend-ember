import Ember from 'ember';

export default Ember.Component.extend({
	tagName:'ul',

	allParents:Ember.computed('node',{
		get(){
			var _t = this;
			var parents = Ember.A();
			var getParent = function getParent (node) {
				if(node.get('parent')){
					parents.pushObject(node);
					return getParent(node.get('parent'));
				}
			};

			getParent(_t.get('node').get('parent'));
			return parents.reverseObjects();
		}
	})
});
