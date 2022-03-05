console.log('This is the map file');

import * as L from 'leaflet'; //import all things (astrid) as L
//console.log("Leaflet", L); // L is object that has all the consoles in Leaflet library
import MiniMap from 'leaflet-minimap';
import homicides from '../_data/harvard_park_homicides.json';

//const map = L.map('map') // const is like let and var
const map = L.map('map', {
  scrollWheelZoom: false,
});
const satelliteLayer = L.tileLayer(
  'https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v9/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibGF0aW1lcyIsImEiOiJjanJmNjg4ZzYweGtvNDNxa2ZpZ2lma3Z4In0.g0lYVIEs9Y5QcUOhXactHA',
  {
    minZoom: 13,
  }
);
satelliteLayer.addTo(map);
map.setView([33.983265, -118.306799], 18);

homicides.forEach((obj) => {
  L.circleMarker([obj.latitude, obj.longitude])
    .addTo(map)
    .bindTooltip(obj.first_name + ' ' + obj.last_name, { permanent: true });
});

const satelliteLayer2 = L.tileLayer(
  'https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v9/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibGF0aW1lcyIsImEiOiJjanJmNjg4ZzYweGtvNDNxa2ZpZ2lma3Z4In0.g0lYVIEs9Y5QcUOhXactHA',
  {
    maxZoom: 11,
  }
);
const miniMap = new MiniMap(satelliteLayer2); // create mini map and add it to the map
miniMap.addTo(map);
