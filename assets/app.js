import './styles/app.scss';

import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import 'leaflet-draw';
import 'leaflet-draw/dist/leaflet.draw.css';

import 'leaflet-routing-machine';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';

import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

window.L = L;

import { initBaladeMap } from './Javascript/balade-map.js';
if (document.getElementById('map')) {
    initBaladeMap();
}