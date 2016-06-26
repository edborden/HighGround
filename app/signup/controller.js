/* global PhoneFormat */
import Ember from 'ember';

const {
  Controller,
  inject: { service }
} = Ember;

export default Controller.extend({

  //services
  ajax: service(),

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
        this.signupPhone();
      } else {
        feedback = "Not a valid number a-hole";
      }
      this.set('feedback', feedback);
    }
  },

  signupPhone() {
    let ajax = this.get('ajax');
    ajax.request('https://edborden.scriptrapps.io/phone', {
      method: 'POST',
      data: "+1" + this.get('phone'),
      headers: {
        "content-type":"text"
      }
    });
  }

});