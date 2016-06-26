import Ember from 'ember';

const {
  Controller,
  inject: { service }
} = Ember;

export default Controller.extend({

  // services
  geolocation: service(),

  // attributes
  error: null,
  waiting: false,

  // actions
  actions: {
    confirm() {
      this.set('error', null);
      this.set('waiting', true);
      let geolocation = this.get('geolocation');
      geolocation.init();
      geolocation.get('promise').then(() => {
        localStorage.snaptagLocation = true;
        this.transitionToRoute('go.location');
      }, (error) => {
        this.set('waiting', false);
        this.set('error', error);
      });
    },
    cancel() {
      this.set('error', null);
    }
  }
});