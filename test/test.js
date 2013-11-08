var assert = require('assert'),
  lib = require('../index.js');

var LOCATIONS = {
  DUBLIN: {
    lat: 53.3478,
    lon: 6.2597
  },
  LA: {
    lat: 34.05,
    lon: 118.25
  },
  NICE: {
    lat: 43.6652,
    lon: 7.215
  }
};

function checkSummary(weather) {
  // Simple check that fields exist
  assert(weather.hasOwnProperty('icon'));
  assert(weather.hasOwnProperty('temperature'));
  assert(weather.hasOwnProperty('rain'));
  return true;
}

describe('Test module', function() {
  this.timeout(10000);

  it('Should return an object with LocationForecast methods', function(done) {
    lib.getWeather(LOCATIONS.DUBLIN, function(err, weather) {
      assert(!err);
      assert(weather);
      assert(weather.xml);
      assert(weather.json);
      done();
    });
  });


  it('Should return array with 5 weather objects', function(done) {
    lib.getWeather(LOCATIONS.DUBLIN, function(err, weather) {
      weather.getFiveDaySummary(function(err, summary) {
        assert(!err);
        assert(summary);
        assert(summary instanceof Array);
        done();
      });
    });
  });


  it('Should return array with 5 weather objects', function(done) {
    lib.getWeather(LOCATIONS.NICE, function(err, weather) {
      weather.getFiveDaySummary(function(err, summary) {
        assert(!err);
        assert(summary);
        assert(summary instanceof Array);
        done();
      });
    });
  });


  it('Should return array with 5 weather objects', function(done) {
    lib.getWeather(LOCATIONS.LA, function(err, weather) {
      weather.getFiveDaySummary(function(err, summary) {
        assert(!err);
        assert(summary);
        assert(summary instanceof Array);
        done();
      });
    });
  });


  it('Should return an object with LocationForecast methods', function(done) {
    lib.getWeather(LOCATIONS.DUBLIN, function(err, weather) {
      weather.getCurrentSummary(function(err, summary) {
        assert(!err);
        assert(summary);
        assert(checkSummary(summary));
        done();
      });
    });
  });


  it('Should return an object with LocationForecast methods', function(done) {
    lib.getWeather(LOCATIONS.LA, function(err, weather) {
      weather.getCurrentSummary(function(err, summary) {
        assert(!err);
        assert(summary);
        assert(checkSummary(summary));
        done();
      });
    });
  });


  it('Should return an object with LocationForecast methods', function(done) {
    lib.getWeather(LOCATIONS.NICE, function(err, weather) {
      weather.getCurrentSummary(function(err, summary) {
        assert(!err);
        assert(summary);
        assert(checkSummary(summary));
        done();
      });
    });
  });
});