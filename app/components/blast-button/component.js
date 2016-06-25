import Ember from 'ember';
const {
  inject: { service },
  Component
} = Ember;

export default Component.extend({

  ajax: service(),
  tagName: 'button',
  classNames: ['btn','btn-danger'],
  location: null,

  click() {
    let ajax = this.get('ajax');
    ajax.request('https://edborden.scriptrapps.io/blast', {
      method: 'POST',
      data: this.get('location').get('id'),
      headers: {
        "content-type":"text"
      }
    });
  }

});