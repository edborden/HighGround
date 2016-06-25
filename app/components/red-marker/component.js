import MarkerLayer from 'current-truck/components/marker-layer';
import observes from 'ember-computed-decorators';

const EventMarker = L.Icon.extend({

  options: {
    iconSize: [40, 40]
  },

  initialize(options) {
    options = L.Util.setOptions(this, options);
  },

  createIcon() {
    let div = document.createElement('div');
    div.className = 'red-marker';
    div.innerHTML = this._createInner();
    this.element = div;
    return div;
  },

  _createInner() {
    return `${this.options.pedestriansCount}/${this.options.spotsCount}`;
  }

});

export default MarkerLayer.extend({

  // attributes
  icon: null,
  pedestriansCount: null,
  spotsCount: null,

  // events
  init() {
    this._super();
    let pedestriansCount = this.get('pedestriansCount');
    let spotsCount = this.get('spotsCount');
    let icon = new EventMarker({ pedestriansCount, spotsCount });
    this.set('icon', icon);
  },

  updateCounts: Ember.observer('spotsCount', 'pedestriansCount', function() {
    let pedestriansCount = this.get('pedestriansCount');
    let spotsCount = this.get('spotsCount');
    this.get('icon').element.innerHTML = `${pedestriansCount}/${spotsCount}`;
  }),

  didCreateLayer() {
    // this._super(...arguments);
    if (this.get('hasBlock')) {
      this._popup = this.L.popup({}, this._layer);
      this._popup.setContent(this.get('destinationElement'));
      // register popup on leaflet layer so it can be accessed by spiderfier, don't want it to be called normally
      this._layer.bindPopup(this._popup);
      this._layer._popup = this._popup;

      this._hijackPopup();

      this.popupOpenDidChange();
    }
  },

  willDestroyLayer() {
    // this._super(...arguments);
    if (this.get('hasBlock')) {
      this._layer.closePopup();
      this._layer.unbindPopup();
      delete this._popup;
      delete this._firstNode;
      delete this._lastNode;
    }
  }

});