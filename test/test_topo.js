var topo = require('../src/script.js');
var logger = require('log4js').getLogger();

var chai = require('chai');
var expect = chai.expect;

describe('Topojson module', function() {
    var geojson = {
        'type': 'FeatureCollection',
        'features': [{
            'type': 'Feature',
            'geometry': {"type":"LineString","coordinates":[[-70.2,43.6],[-70,43]]},
            'properties': { 'id': 1 }
        }]
    };

    it('should convert geojson to a geojson', function() {
        topo.fromGeoJson(geojson).then(function(topojson) {
            expect(topojson.objects.collection.geometries.length).to.be.equal(1);
        })
        .catch(function(err) {
            logger.error(err);
        });
    });
});
