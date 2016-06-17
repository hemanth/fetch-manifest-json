# fetch-manifest-json [![Build Status](https://travis-ci.org/hemanth/fetch-manifest-json.svg?branch=master)](https://travis-ci.org/hemanth/fetch-manifest-json)

> Fetch mainfest.json from a PWA.


## Install

```
$ npm install --save fetch-manifest-json
```


## Usage

```js
const fetchManifestJson = require('fetch-manifest-json');

fetchManifestJson(<URL>).then(console.log).catch(console.error);
```

## CLI

```
$ npm install --global fetch-manifest-json
```

```
$ fetch-manifest-json --help

  Usage
    fetch-manifest-json [URL]

  Examples
    $ fetch-manifest-json https://jsfeatures.in

    { name: 'JSfeatures.in',
      short_name: 'JSfeatures',
      icons: 
       [ { src: 'images/touch/icon-128x128.png',
           sizes: '128x128',
           type: 'image/png' },
         { src: 'images/touch/apple-touch-icon.png',
           sizes: '152x152',
           type: 'image/png' },
         { src: 'images/touch/ms-touch-icon-144x144-precomposed.png',
           sizes: '144x144',
           type: 'image/png' },
         { src: 'images/touch/chrome-touch-icon-192x192.png',
           sizes: '192x192',
           type: 'image/png' } ],
      start_url: '/',
      display: 'standalone',
      background_color: '#3E4EB8',
      theme_color: '#00BCD4' } 
```

P.S: This module is extracted from [PWAify](https://github.com/vladikoff/PWAify)

## License

MIT © [Hemanth.HM](https://h3manth.com)
