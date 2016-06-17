'use strict';
const got = require('got');
const debug = require('debug')('manifest');
const xray = require('x-ray')();

module.exports = function (appUrl) {
  return new Promise(function (resolve, reject) {
        xray(appUrl, 'link[rel=manifest]@href')(function (err, manifestTarget) {
            debug(err, manifestTarget);

            if (err) {
                return reject(err);
            }

            return resolve({
                manifestTarget: manifestTarget
            });
        });
    }).then(function (result) {
        if (result.manifestTarget) {
          // found manifest via html
            return got(result.manifestTarget);
        } 
        // no manifest in html, fetch at root
        return got(appUrl + '/manifest.json');
        
    }).then(function (result) {
        var manifestResponse = result.body;
        var manifestJson = null;
        try {
            manifestJson = JSON.parse(manifestResponse);
        } catch (e) {
            throw new Error('Failed to parse manifest.json');
        }

        return manifestJson;
    })
    .catch(function (err) {
        throw err;
    });
};