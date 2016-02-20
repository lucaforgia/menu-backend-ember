import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('tier', {
    path: 'tier/:tier_id'
  }, function() {
    this.route('href', {
      path: '/href'
    });

    this.route('children', {
      path: '/children'
    }, function() {
      this.route('new', {
        path: '/new'
      });
    });
  });

  this.route('index', {path:'/'}, function() {
    this.route('new');
  });
});

export default Router;
