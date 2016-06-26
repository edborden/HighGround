import Ember from 'ember';
import ChecksStatus from '../../mixins/checks-status';

const {
  Route
} = Ember;

export default Route.extend({

  async setupController(controller, model) {
    await model;
    console.log(model);
    let sorted = model.sortBy('distanceFromMe').get('firstObject');
    controller.set('model', sorted);
  }

});