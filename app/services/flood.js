import Ember from 'ember';
import { alias, observes } from 'ember-computed-decorators';

const {
  Service,
  inject: { service }
} = Ember;

export default Service.extend({

  // services
  store: service(),
  routing: service('-routing'),

  // attributes
  holder: null,

  // computed
  @alias('holder.flood') status,

  async init() {
    let statuses = this.get('store').findAll('status');
    await statuses;
    let status = statuses.get('firstObject');
    await status;
    this.set('holder', status);
    return status;
  },

  @observes('status')
  floodChanged() {
    let status = this.get('status');
    let router = this.get('routing');
    if ( status === true ) {
      router.transitionTo('go');
    } else {
      router.transitionTo('signup');
    }
  }

});