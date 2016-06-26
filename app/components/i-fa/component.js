import Ember from 'ember';
import computed from 'ember-computed-decorators';

const {
  Component,
  isPresent
} = Ember;

export default Component.extend({

  tagName: 'i',
  icon: null,
  size: 'lg',
  color: null,
  classNames: [ 'fa' ],
  classNameBindings: [ 'computedSize', 'computedIcon', 'computedColor' ],

  @computed
  computedSize() {
    return `fa-${this.get('size')}`;
  },

  @computed('icon')
  computedIcon() {
    return `fa-${this.get('icon')}`;
  },

  @computed('color')
  computedColor() {
    let color = this.get('color');
    if (isPresent(color)) {
      return `color-${color}`;
    } else {
      return false;
    }
  }

});