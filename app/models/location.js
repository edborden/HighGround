import DS from 'ember-data';
import computed from 'ember-computed-decorators';

const {
  Model,
  attr
} = DS;

export default Model.extend({

  // attributes
  lat: attr('number'),
  lng: attr('number'),
  pedestrians_count: attr('number'),
  spots_count: attr('number'),

  @computed('pedestrians_count', 'spots_count')
  score() {
    return this.get('pedestrians_count') * this.get('spots_count');
  },

  @computed('score')
  needsVendor() {
    return this.get('score') > 100;
  },

  @computed('pedestrians_count')
  pedestriansFixed() {
    let pedestrians_count = this.get('pedestrians_count');
    if (pedestrians_count < 0) {
      return 0;
    } else {
      return pedestrians_count;
    }
  },

  @computed('spots_count')
  spotsFixed() {
    let spots_count = this.get('spots_count');
    if (spots_count < 0) {
      return 0;
    } else {
      return spots_count;
    }
  }

});