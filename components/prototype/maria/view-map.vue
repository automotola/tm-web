<template lang="pug">
  div(:id="data.name")
</template>
<script>
import 'ol/ol.css';
import {
  Map,
  View,
  Feature
} from 'ol'
import * as turf from '@turf/turf'
import * as ol from 'ol';
import * as control from 'ol/control';
import * as proj from 'ol/proj';
import * as geom from 'ol/geom';
import * as source from 'ol/source';
import * as layer from 'ol/layer';
import * as interaction from 'ol/interaction.js';
import FullScreen from 'ol/control'

import Point from 'ol/geom/Point.js';
import {easeOut} from 'ol/easing.js';
import {fromLonLat} from 'ol/proj.js';
import {unByKey} from 'ol/Observable.js';

import { defaults, MouseWheelZoom} from 'ol/interaction.js';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
import { Circle as CircleStyle, Fill, Stroke, Style, Icon } from 'ol/style';
import GeoJSON from 'ol/format/GeoJSON.js';
 
import OSM from 'ol/source/OSM.js';

const R = require('rambda')

export default {
  props: [
    'data',
    'table'
  ],
  mounted: function () {
    let map = new Map({
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      target: this.data.name,
      view: new View({
        center: proj.fromLonLat([this.data.center[0], this.data.center[1]]),
        zoom: 0
      }),
      controls: control.defaults({
        attribution: false,
        zoom: false,
      }),
      interactions: interaction.defaults({
        mouseWheelZoom: true,
        dragPan: true
      })
    })
   
    const format = new GeoJSON();
    console.log(format)
    let markers = [];
    let points = [];
    let items = this.table.rows
    for (var i = 0; i < items.length; ++i) {
      let marker
      let point
      marker = new Feature({
        geometry: new geom.Point(
          proj.fromLonLat([parseFloat(items[i][2]), parseFloat(items[i][1])])
        ),
        name: items[i][0]
      });
      point = format.writeFeatureObject(marker);
      // marker.setStyle(iconStyle);
      markers.push(marker);
      points.push(point)
    }
   
    
    // var features = format.readFeatures(json);

    // convert to a turf.js feature
    // let turfPoint = format.writeFeatureObject(markers[0]);
    // let turfPoints = format.writeFeaturesObject(points);
    // let centroid = turf.centroid(turfPoint);
    console.log("THIS CENT", markers[0], points)

    const markerSource = new source.Vector({
      features: markers
    });
    const markerVector = new layer.Vector({
      source: markerSource,
    });
    map.addLayer(markerVector);

    function addRandomFeature() {
        var x = Math.random() * 360 - 180;
        var y = Math.random() * 180 - 90;
        var geom = new Point(fromLonLat([x, y]));
        var feature = new Feature(geom);
        markerSource.addFeature(feature);
      }

      var duration = 3000;
      function flash(feature) {
        var start = new Date().getTime();
        var listenerKey = map.on('postcompose', animate);

        function animate(event) {
          var vectorContext = event.vectorContext;
          var frameState = event.frameState;
          var flashGeom = feature.getGeometry().clone();
          var elapsed = frameState.time - start;
          var elapsedRatio = elapsed / duration;
          // radius will be 5 at start and 30 at end.
          var radius = easeOut(elapsedRatio) * 25 + 5;
          var opacity = easeOut(1 - elapsedRatio);

          var style = new Style({
            image: new CircleStyle({
              radius: radius,
              stroke: new Stroke({
                color: 'rgba(255, 0, 0, ' + opacity + ')',
                width: 0.25 + opacity
              })
            })
          });

          vectorContext.setStyle(style);
          vectorContext.drawGeometry(flashGeom);
          if (elapsed > duration) {
            unByKey(listenerKey);
            return;
          }
          // tell OpenLayers to continue postcompose animation
          map.render();
        }
      }

      markerSource.on('addfeature', function(e) {
        flash(e.feature);
      });

      window.setInterval(addRandomFeature, 500);
  }
}
</script>
