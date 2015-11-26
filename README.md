# gtran-topojson

A simple wrap of Mike Bostock's [topojson](https://github.com/mbostock/topojson) for the consistence with [gtran](https://github.com/haoliangyu/gtran).

## Installation

```javascript
npm install gtran-topojson
```

## Functions

* **setPromiseLib(object)**

    Specify the promise library. If not, the library will use the native Promise.

* **fromGeoJson(geojson)**

    Convert the geojson to topojson.

## Use Example

```javascript
var topo = require('gtran-topojson');

// if specific promise library is needed
topo.setPromiseLib(require('bluebird'));

// Save geojson into KMZ file
topo.fromGeoJson(geojson).then(function(object) {
    var topojson = object;
});

```
