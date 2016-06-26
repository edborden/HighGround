import Ember from 'ember';

const {
  Controller
} = Ember;

export default Controller.extend({

  // attributes
  phone: null,
  feedback: null,
  display: true,

  actions: {
    signup() {
      let phone = this.get('phone');
      let valid = PhoneFormat.isValidNumber(phone,'US');
      let feedback;
      if ( valid ) {
        feedback = "You are signed up!";
        this.set('display', false);
      } else {
        feedback = "Not a valid number a-hole";
      }
      this.set('feedback', feedback);
    }
  }

});