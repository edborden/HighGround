import Ember from 'ember';
import computed from 'ember-computed-decorators';
import { alias } from 'ember-computed-decorators';

const {
  Service,
  inject: { service },
  run: { bind },
  RSVP: { Promise },
  Object
} = Ember;

export default Service.extend({

  // attributes
  promise: null,
  resolvePromise: null,
  rejectPromise: null,
  lat: null,
  lng: null,
  accuracy: null,
  failsafeID: null,

  // events
  init() {
    this.setupLocation();
    this.set('promise', new Promise((resolve, reject) => {
      this.set('resolvePromise', resolve);
      this.set('rejectPromise', reject);
    }));
  },

  // helpers
  setupLocation() {
    let firstPositionSuccess = bind(this, this.firstPositionSuccess);
    let firstPositionError = bind(this, this.firstPositionError);
    let setPosition = bind(this, this.setPosition);

    navigator.geolocation.watchPosition(setPosition, this.error, { enableHighAccuracy: true });
    navigator.geolocation.getCurrentPosition(firstPositionSuccess, firstPositionError, {
      timeout: 6000,
      maximumAge: 0,
      enableHighAccuracy: true
    });

    this.set('failsafeID', this.setFailsafeInterval());

  },

  setFailsafeInterval() {
    let failsafeFail = bind(this, this.failsafeFail);
    return setInterval(failsafeFail, 7000);
  },

  failsafeFail() {
    this.get('rejectPromise')('Your location request timed out. Try again.');
  },

  clearFailsafe() {
    clearInterval(this.get('failsafeID'));
  },

  setPosition(position) {
    this.set('lat', position.coords.latitude);
    this.set('lng', position.coords.longitude);
    this.set('accuracy', position.coords.accuracy);
  },

  firstPositionSuccess(position) {
    this.clearFailsafe();
    this.setPosition(position);
    this.get('resolvePromise')();
  },

  firstPositionError(error) {
    this.clearFailsafe();
    this.get('rejectPromise')(this.error(error));
  },

  error(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        return 'You denied the request for your location or your current settings have blocked geolocation access completely. You will have to change or reset your browser or system settings to be able to re-confirm.';
        break;
      case error.POSITION_UNAVAILABLE:
        return 'Your location information is unavailable. Please make sure your GPS and/or WiFi radios are enabled. If they already are, it may not be able to get your location at this time. Please try again in a different location.';
        break;
      case error.TIMEOUT:
        return 'The request for your location timed out. Please make sure your GPS and/or WiFi radios are enabled. If they already are, it may not be able to get your location at this time. Please try again in a different location.';
        break;
      case error.UNKNOWN_ERROR:
        return 'An unknown error occurred. Please make sure your GPS and/or WiFi radios are enabled. If they already are, it may not be able to get your location at this time. Please try again in a different location or try restarting the application.';
        break;
      default:
        return 'An very unknown error occurred. Please make sure your GPS and/or WiFi radios are enabled. If they already are, it may not be able to get your location at this time. Please try again in a different location or try restarting the application.';
    }
  },

  getObject() {
    let lat = this.get('lat');
    let lng = this.get('lng');
    return { lat, lng };
  },

  getEmberObject() {
    let lat = this.get('lat');
    let lng = this.get('lng');
    return new Object({ lat, lng });
  },

  getArray() {
    let lat = this.get('lat');
    let lng = this.get('lng');
    return [ lat, lng ];
  }

});