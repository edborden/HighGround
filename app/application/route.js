import Ember from 'ember';

const {
  Route,
  inject: { service }
} = Ember;

export default Route.extend({

  // services
  flood: service(),

  async beforeModel() {
    return this.get('flood').init();
  }

});