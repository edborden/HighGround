import Ember from 'ember';

const {
  Mixin,
  inject: { service }
} = Ember;

export default Mixin.create({

  // services
  flood: service(),

  beforeModel() {
    let status = this.get('flood').get('status');
    if ( status === true ) {
      this.replaceWith('go');
    } else {
      this.replaceWith('signup');
    }
  }

});