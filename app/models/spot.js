import Ember from 'ember';
import computed from 'ember-computed-decorators';
import { locationDistanceFrom } from 'high-ground/utils/geo-helpers';

const {
  Model,
  attr
} = DS;

const {
  inject: { service }  
} = Ember;

export default Model.extend({

  // services
  geolocation: service(),

  // attributes
  lat: attr('number'),
  lng: attr('number'),
  available: attr('boolean'),

  @computed
  distanceFromMe() {
    let meters = locationDistanceFrom(this.get('geolocation'), this);
    let miles = meters * 0.000621371;
    return Math.round(miles * 100) / 100;
  }

});