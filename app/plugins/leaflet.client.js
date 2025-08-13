// plugins/leaflet.js
import L from 'leaflet';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('leaflet', L);  // Menyuntikkan Leaflet ke dalam aplikasi Nuxt
});
