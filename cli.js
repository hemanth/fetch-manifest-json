#!/usr/bin/env node
'use strict';
const meow = require('meow');
const fetchManifestJson = require('./');
const isOnline = require('is-online');
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

isOnline(function(err, online) {
	if(!online) {
		console.log('Please check your internet connectivity.');
		process.exit(1);
	}
});

fetchManifestJson(cli.input[0]).then(p => console.log(p))
