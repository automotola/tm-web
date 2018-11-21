<template lang="pug">
  .uk-panel(uk-height-viewport).uk-flex.uk-flex-center.uk-flex-middle.bg-purple
    card#map
</template>
<script>
import Card from '~/components/patterns/card'
import 'ol/ol.css';
import {Map, View, Feature} from 'ol';
import TileLayer from 'ol/layer/Tile';
import BingMaps from 'ol/source/BingMaps.js';
import * as proj from 'ol/proj';
import * as geom from 'ol/geom';
import * as source from 'ol/source';
import * as layer from 'ol/layer';
import { Icon, Style } from 'ol/style';
import imageURL from '~/static/map_marker.png';
import Overlay from 'ol/Overlay'; 

var sensorLocations = [
    {
      "kit_id": "USP_15773509",
      "lat": 52.0919,
      "lon": 5.17468,
      "label": "PU005"
    },
    {
      "kit_id": "USP_15708774",
      "lat": 52.0884,
      "lon": 5.17685,
      "label": "PU018"
    },
    {
      "kit_id": "USP_15709259",
      "lat": 52.0833,
      "lon": 5.18231,
      "label": "PU016"
    },
    {
      "kit_id": "USP_15709341",
      "lat": 52.0844,
      "lon": 5.16136,
      "label": "JCD01"
    },
    {
        "kit_id": "USP_15709689",
        "lat": 52.0834,
        "lon": 5.17742,
        "label": "PU012"
    },
    {
        "kit_id": "USP_15709818",
        "lat": 52.0829,
        "lon": 5.17567,
        "label": "PU003"
    },
    {
        "kit_id": "USP_10695905",
        "lat": 52.0854,
        "lon": 5.16822,
        "label": "PU017"
    },
    {
        "kit_id": "USP_10763145",
        "lat": 52.0858,
        "lon": 5.176,
        "label": "PU009"
    },
    {
        "kit_id": "USP_10763351",
        "lat": 52.086,
        "lon": 5.17368,
        "label": "PU014"
    },
    {
        "kit_id": "USP_15710688",
        "lat": 52.0889,
        "lon": 5.18102,
        "label": "PU020"
    },
    {
        "kit_id": "USP_15771764",
        "lat": 52.0829,
        "lon": 5.1721,
        "label": "PU001"
    },
    {
        "kit_id": "USP_15772004",
        "lat": 52.0892,
        "lon": 5.18775,
        "label": "PU004"
    },
    {
        "kit_id": "USP_15772731",
        "lat": 52.0837,
        "lon": 5.16944,
        "label": "PU007"
    },
    {
        "kit_id": "USP_15707842",
        "lat": 52.1205,
        "lon": 5.19178,
        "label": "PU021"
    },
    {
        "kit_id": "USP_15709749",
        "lat": 52.0867,
        "lon": 5.16449,
        "label": "PU019"
    },
    {
        "kit_id": "USP_15711107",
        "lat": 52.0806,
        "lon": 5.17469,
        "label": "PU011"
    },
    {
        "kit_id": "USP_15771119",
        "lat": 52.1205,
        "lon": 5.19177,
        "label": "PU022"
    },
    {
        "kit_id": "USP_15711100",
        "lat": 52.0891,
        "lon": 5.16567,
        "label": "PU002"
    },
    {
        "kit_id": "USP_15769948",
        "lat": 52.0846,
        "lon": 5.17166,
        "label": "PU006"
    },
    {
        "kit_id": "USP_15771968",
        "lat": 52.0846,
        "lon": 5.17181,
        "label": "JCD02"
    },
    {
        "kit_id": "USP_15711612",
        "lat": 52.0842,
        "lon": 5.17225,
        "label": "PU008"
    },
    {
        "kit_id": "USP_15772929",
        "lat": 52.0841,
        "lon": 5.16497,
        "label": "PU010"
    }
]

let map = new Map({
    layers: [
      new TileLayer({
          visible: true,
          preload: Infinity,
          source: new BingMaps({
            key: 'AkzU1J3hp9hFVZcePY2dd7Eu4YCcSk6DJGvGYGoxts5tJFV7dVvt-GctKPgjOo7C',
            imagerySet: 'AerialWithLabels'
        })
      }),
    ],
    loadTilesWhileInteracting: true,
    target: 'map',
    view: new View({
        center: proj.fromLonLat([5.17, 52.09]),
        zoom: 14
    })
});

// Adding markers on the map
let marker;
let markers=[];

let iconStyle = new Style({
    image: new Icon(/** @type {module:ol/style/Icon~Options} */ ({
        anchor: [0.5, 46],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        src: imageURL
    }))
});

for (let i = 0; i < sensorLocations.length; ++i) {
    marker = new Feature({
        geometry: new geom.Point(
            proj.fromLonLat([sensorLocations[i].lon, sensorLocations[i].lat])
        ), 
        name: sensorLocations[i].label
    });

    marker.setStyle(iconStyle);
    markers.push(marker);
} 

let vectorSource = new source.Vector({
    features: markers
});
let markerVectorLayer = new layer.Vector({
    source: vectorSource,
});

map.addLayer(markerVectorLayer);

// make markers clickable
let element = document.getElementById('popup');
let popup = new Overlay({
    element: element,
    positioning: 'bottom-center',
    stopEvent: false,
    offset: [0, -50]
});
map.addOverlay(popup);

// display popup on click
map.on('click', function(evt) {
let feature = map.forEachFeatureAtPixel(evt.pixel,
    function(feature) {
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
        $(element).popover('hide');
    }
});

// change mouse cursor when over marker
map.on('pointermove', function(e) {
    if (e.dragging) {
        $(element).popover('hide');
        return;
    }
    var pixel = map.getEventPixel(e.originalEvent);
    var hit = map.hasFeatureAtPixel(pixel);
    map.getTargetElement().style.cursor = hit ? 'pointer' : '';
});

export default {
  auth: false,
  components: {
    Card
  },
  data () {
    return {
      fullsceen: false
    }
  },
  mounted() {

  }
}
</script>

