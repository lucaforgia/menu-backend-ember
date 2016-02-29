import Ember from 'ember';
// import {cane} from 'menu-backend/base/tier/new/route'
// import roba from 'menu-backend/base/tier/new/route'


export default Ember.Route.extend({
	model(){
		// alert(BaseTierNewRoute.get('prova'))
		// alert(cane())
		// return this.store.findAll('rootTier').then(function(menu){
		// 	return menu.get('firstObject');
		// });
		return this.store.findAll('tier').then(function(model){
			return model.filterBy('parent',null).get('firstObject');
		});
	},
	actions:{
		removeTier(model, ask){
			var goHaed = true;
			if(typeof ask === 'boolean'){
				goHaed = window.confirm('Are you sure? This will remove all the sub-tiers');
			}

			if(goHaed){
				var toRemove = [];
				var getAllChildren = function(model){
					toRemove.unshift(model);
					if(model.get('children')){
						model.get('children').forEach(function(childModel){
							getAllChildren(childModel);
						});
					}
				};
				getAllChildren(model);

				toRemove.forEach(function(item){
					item.deleteRecord();
				});

				model.save();
			}
		},
		moveTier(targetId, movedId, side){
			var moved = this.store.peekRecord('tier',movedId);
			var target = this.store.peekRecord('tier',targetId);
			var movedParent = moved.get('parent');
			var targetParent = target.get('parent');
			var newParent;

			if(side === 'up' || side === 'down'){
				newParent = targetParent;
			}
			else{
				newParent = target;
			}

			var getMovedIdx = function(side, idx){
				if(side === 'up'){return idx;}
				if(side === 'down'){return idx + 1;}
				else{return 0;}
			};


			movedParent.get('children').removeObject(moved);

			var targetIdx = newParent.get('children').indexOf(target);

			var movedIdx = getMovedIdx(side, targetIdx);
			moved.set('sort',movedIdx);
			newParent.get('children').insertAt(movedIdx,moved);//add child just to show asap the moving. It's not really functional needed because the child is saved and returned with the corret parent
			moved.set('parent',newParent);

			moved.save();

			return false;

		},
		resetDb(){
			var _t = this;
			new Ember.RSVP.Promise(function (resolve, reject) {
				Ember.$.ajax('/api/fill-standard',{
					success:function (res) {
						resolve(res);
					},
					error:function (err) {
						reject(err);
					}
				});
			})
			.then(function () {
				window.location.reload();
			})
			.catch(function (error) {
				alert(error)
			});
		}
	}
});
