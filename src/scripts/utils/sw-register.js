import { Workbox } from 'workbox-window';

export default async function serviceWorkerRegister() {
  if (!('serviceWorker' in navigator)) {
    console.log('This browser version does not support service worker capability.');
    return;
  }

  const wb = new Workbox('./sw.bundle.js');

  try {
    await wb.register();
    console.log('Service worker registered!');
  } catch (error) {
    console.error('Service worker registry failed!', error);
  }
}
