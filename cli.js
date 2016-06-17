#!/usr/bin/env node
'use strict';
var meow = require('meow');
var fetchManifestJson = require('./');

var cli = meow([
	'Usage',
	'  $ fetch-manifest-json [URL]',
	'',
	'  $ fetch-manifest-json https://jsfeautes.in'
]);

fetchManifestJson(cli.input[0]).then(p => console.log(p));
