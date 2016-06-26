#!/usr/bin/env node
'use strict';
const meow = require('meow');
const fetchManifestJson = require('./');
const cli = meow([
	'Usage',
	'  $ fetch-manifest-json [URL]',
	'Example',
	'  $ fetch-manifest-json https://jsfeatures.in'
]);

//If no argument is supplied then show help
if(cli.input.length === 0) {
	console.log(cli.help);
	process.exit(0);
}

dns.lookup('www.google.com', err => {
  if (err && err.code === 'ENOTFOUND') {
    console.log('Please check you internet connection.');
    process.exit(1);
  }
});

fetchManifestJson(cli.input[0]).then(p => console.log(p))
