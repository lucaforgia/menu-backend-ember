import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  href:DS.attr('string'),
  children: DS.hasMany('tier',{inverse:'parent', async:false}),
  parent: DS.belongsTo('tier',{inverse:'children', async:false}),
  sort:DS.attr('number')
});
// $E.store.find('tier',4).then(function(result){$E.store.find('tier',2).then(function(r2){result.get('children').addObject(r2)})})


// $E.store.find('tier',2).then(function(r2){result.addObject(r2)})