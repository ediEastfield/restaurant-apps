import 'regenerator-runtime';
import CacheHelper from './utils/cache-helper';

const assetsToCache = [
  '/',
  './icons/icon-16x16.png',
  './icons/icon-24x24.png',
  './icons/icon-32x32.png',
  './icons/icon-64x64.png',
  './icons/icon-128x128.png',
  './icons/icon-256x256.png',
  './icons/icon-512x511.png',
  './images/heros/hero-image_3.jpg',
  './index.html',
  './app.bundle.js',
  './app.webmanifest',
  './sw.bundle.js',
];

self.addEventListener('install', (event) => {
  event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request));
});
