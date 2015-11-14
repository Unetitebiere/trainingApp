angular.module('starter.services', [])

  .factory('config', function () {
    var config = {};
    config.URL = "https://blazing-torch-7284.firebaseio.com";
    
    return config;
  })

  .factory('Exercises', function (config, $firebaseArray) {
    var exercisesRef = new Firebase(config.URL + "/exercises");

    return $firebaseArray(exercisesRef);
  });
