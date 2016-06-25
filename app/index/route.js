import Ember from 'ember';

const {
  Route,
  inject: { service }
} = Ember;

export default Route.extend({

  // services
  flood: service(),

  beforeModel() {
    let status = this.get('flood').get('status');
    console.log(status);
    if ( status === true ) {
      this.replaceWith('go');
    } else {
      this.replaceWith('signup');
    }
  }

});