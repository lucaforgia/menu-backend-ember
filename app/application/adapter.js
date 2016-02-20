import DS from 'ember-data';

export default DS.RESTAdapter.extend({
	namespace:'api'/*,*/
	// no need cause ember g http-proxy
	// host:'http://localhost:3000'
});
