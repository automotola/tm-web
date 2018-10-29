<template lang="pug">
.panel.has-background-dark
  #map
    #popup
</template>
<style>
      #map {
        width: 100%;
        height: 300px;
        background-color: #000;
      }

      .map:-moz-full-screen {
        height: 100%;
      }
      .map:-webkit-full-screen {
        height: 100%;
      }
      .map:-ms-fullscreen {
        height: 100%;
      }
      .map:fullscreen {
        height: 100%;
      }
      .ol-rotate {
        top: 3em;
      }
</style>
<script>
import $ from 'jquery'
import 'ol/ol.css';
import { Map, View, Feature } from 'ol';
import { defaults as defaultInteractions, MouseWheelZoom} from 'ol/interaction.js';
import { defaults as defaultControls, FullScreen } from 'ol/control';
import {focus} from 'ol/events/condition.js';
import OSMXML from 'ol/format/OSMXML';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
import { bbox as bboxStrategy } from 'ol/loadingstrategy';
import { transformExtent } from 'ol/proj';
import BingMaps from 'ol/source/BingMaps';
import VectorSource from 'ol/source/Vector';
import { Circle as CircleStyle, Fill, Stroke, Style, Icon } from 'ol/style';
import * as proj from 'ol/proj';
import * as geom from 'ol/geom';
import * as source from 'ol/source';
import * as layer from 'ol/layer';
import imageURL from '~/assets/img/map_marker.png';
import Overlay from 'ol/Overlay';
import { legend } from '~/assets/js/sensors'
export default {
    data: () => {
      return {

      }
    },
    created: () => {
        console.log("TABLE created:")
    },
    mounted: () => {


const sensorLocations = legend.utrechtSensors
const styles = {
/*   'amenity': {
    'parking': new Style({
      stroke: new Stroke({
        color: 'rgba(170, 170, 170, 1.0)',
        width: 1
      }),
      fill: new Fill({
        color: 'rgba(170, 170, 170, 0.3)'
      })
    })
  }, */
  'building': {
    '.*': new Style({
      zIndex: 100,
      stroke: new Stroke({
        color: 'rgba(246, 99, 79, 1.0)',
        width: 1
      }),
      fill: new Fill({
        color: 'rgba(246, 99, 79, 0.3)'
      })
    })
  },
  'highway': {
    'service': new Style({
      stroke: new Stroke({
        color: 'rgba(255, 255, 255, 1.0)',
        width: 2
      })
    }),
    '.*': new Style({
      stroke: new Stroke({
        color: 'rgba(255, 255, 255, 1.0)',
        width: 3
      })
    })
  },
  'landuse': {
    'forest|grass|allotments': new Style({
      stroke: new Stroke({
        color: 'rgba(140, 208, 95, 1.0)',
        width: 1
      }),
      fill: new Fill({
        color: 'rgba(140, 208, 95, 0.3)'
      })
    })
  },
  'natural': {
    'tree': new Style({
      image: new CircleStyle({
        radius: 2,
        fill: new Fill({
          color: 'rgba(140, 208, 95, 1.0)'
        }),
        stroke: null
      })
    })
  }
};

const vectorSource = new VectorSource({
  format: new OSMXML(),
  loader: function (extent, resolution, projection) {
    var epsg4326Extent = transformExtent(extent, projection, 'EPSG:4326');
    var client = new XMLHttpRequest();
    client.open('POST', 'https://overpass-api.de/api/interpreter');
    client.addEventListener('load', function () {
      var features = new OSMXML().readFeatures(client.responseText, {
        featureProjection: map.getView().getProjection()
      });
      vectorSource.addFeatures(features);
    });
    var query = '(way(' +
      epsg4326Extent[1] + ',' + epsg4326Extent[0] + ',' +
      epsg4326Extent[3] + ',' + epsg4326Extent[2] +
      ');rel(bn)->.x;way(' + epsg4326Extent[1] + ',' + epsg4326Extent[0] + ',' +
      epsg4326Extent[3] + ',' + epsg4326Extent[2] + ');node(w)->.x;rel(bw););out meta;';
    client.send(query);
  },
  strategy: bboxStrategy
});

const vector = new VectorLayer({
  source: vectorSource,
  style: function (feature) {
    for (var key in styles) {
      var value = feature.get(key);
      if (value !== undefined) {
        for (var regexp in styles[key]) {
          if (new RegExp(regexp).test(value)) {
            return styles[key][regexp];
          }
        }
      }
    }
    return null;
  }
});

const raster = new TileLayer({
  source: new BingMaps({
    imagerySet: 'Aerial',
    key: 'AkzU1J3hp9hFVZcePY2dd7Eu4YCcSk6DJGvGYGoxts5tJFV7dVvt-GctKPgjOo7C'
  })
});

const map = new Map({
  interactions: defaultInteractions({mouseWheelZoom: false}).extend([
    new MouseWheelZoom({
      constrainResolution: true, // force zooming to a integer zoom
      condition: focus // only wheel/trackpad zoom when the map has the focus
    })
  ]),
  layers: [
    vector
  ],
  controls: defaultControls().extend([
    new FullScreen()
  ]),
  loadTilesWhileInteracting: true,
  target: 'map',
  view: new View({
    center: proj.fromLonLat([5.17, 52.09]),
    zoom: 15
  })
});

let marker;
const markers = [];

const iconStyle = new Style({
  image: new Icon(/** @type {module:ol/style/Icon~Options} */({
    anchor: [0.5, 46],
    anchorXUnits: 'fraction',
    anchorYUnits: 'pixels',
    src: imageURL
  }))
});

// Adding markers on the map

for (var i = 0; i < sensorLocations.length; ++i) {
  marker = new Feature({
    geometry: new geom.Point(
      proj.fromLonLat([sensorLocations[i].lon, sensorLocations[i].lat])
    ),
    name: sensorLocations[i].label
  });

  marker.setStyle(iconStyle);
  markers.push(marker);
}

const vectorSource2 = new source.Vector({
  features: markers
});
const markerVectorLayer = new layer.Vector({
  source: vectorSource2,
});

map.addLayer(markerVectorLayer);

// make markers clickable
var element = document.getElementById('popup');
var popup = new Overlay({
  element: element,
  positioning: 'bottom-center',
  stopEvent: false,
  offset: [0, -50]
});
map.addOverlay(popup);

// display popup on click
map.on('click', function (evt) {
  var feature = map.forEachFeatureAtPixel(evt.pixel,
    function (feature) {
      return feature;
    });

  if (feature) {
    var coordinates = feature.getGeometry().getCoordinates();
    popup.setPosition(coordinates);
    $(element).popover({
      placement: 'top',
      html: true,
      content: feature.get('name')
    });
    $(element).popover('show');
  } else {
    $(element).popover('dispose');
  }
});

// change mouse cursor when over marker
map.on('pointermove', function (e) {
  if (e.dragging) {
    $(element).popover('dispose');
    return;
  }
  var pixel = map.getEventPixel(e.originalEvent);
  var hit = map.hasFeatureAtPixel(pixel);
  map.getTargetElement().style.cursor = hit ? 'pointer' : '';
});
        console.log("TABLE mounted:")
    },
    updated: () => {
        console.log("TABLE updated:")
    }
}
</script>
