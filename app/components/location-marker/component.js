import MarkerLayer from 'high-ground/components/marker-layer';

const EventMarker = L.Icon.extend({

  options: {
    iconSize: [10, 10]
  },

  initialize(options) {
    options = L.Util.setOptions(this, options);
  },

  createIcon() {
    let div = document.createElement('div');
    div.className = 'location-marker';
    // div.innerHTML = this._createInner();
    this.element = div;
    return div;
  },

  // _createInner() {
  //  return `${this.options.pedestriansCount}/${this.options.spotsCount}`;
  // }

});

export default MarkerLayer.extend({

  // attributes
  icon: null,

  // events
  init() {
    this._super();
    let icon = new EventMarker();
    this.set('icon', icon);
  },

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