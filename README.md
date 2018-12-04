# ionic-pwa-qr
This is a barebone Ionic 3 Progressive Web App (PWA) that uses the standard Ionic Native QRCode Scanner Plugin (https://ionicframework.com/docs/native/qr-scanner/).
Currently works fine in a browser on a computer but doesn't work in any smartphone tried (probably) because of a bug in the plugin itself: https://github.com/bitpay/cordova-plugin-qrscanner/issues/212

Install with:

`$ npm i`

Create the PWA:

`$ ionic cordova build browser`

Your PWA code is then built in /platform/browser/www


