#!/usr/bin/env node
'use strict';
var meow = require('meow');
var fetchManifestJson = require('./');
var cli = meow([
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

fetchManifestJson(cli.input[0]).then(p => console.log(p)).catch(err => console.log(err))
