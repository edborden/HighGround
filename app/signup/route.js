import Ember from 'ember';
import ChecksStatus from '../mixins/checks-status';

const {
  Route
} = Ember;

export default Route.extend(ChecksStatus);