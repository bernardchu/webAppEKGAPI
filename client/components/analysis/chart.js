angular.module('ekg.home')

.controller('chartController', function ($scope, getResults, TimeFactory){
  
  $scope.renderer = 'scatterplot';
  if (!TimeFactory.getTime().dateObject) TimeFactory.setTime(1420000000000);
  $scope.getChartData = function(){
    getResults.getChartData(TimeFactory.getTime().dateObject.getTime())
      .then(function(results){
        var graph = new Rickshaw.Graph( {
          element: document.querySelector("#frequencyChart"),
          width: 600,
          height: 400,
          renderer: 'scatterplot',
          stroke: true,
          padding: { top: 0.05, left: 0.05, right: 0.05 },
          series: [ {
            data: results.data,
            color: 'steelblue'
          } ]
        } );
        var yAxis = new Rickshaw.Graph.Axis.Y({
          graph: graph
        });
        var x_ticks = new Rickshaw.Graph.Axis.X({
          graph: graph,
          pixelsPerTick: 100,
          tickFormat: function(n) {
            var map = {
              0: '',
              1: '',
              2: '',
              3: '',
              4: ''
            };
            return map[n];
          }
        });      
        yAxis.render();
        x_ticks.render();
        graph.render();
      })
      .catch(function(err){
        console.log('$http error in interval chart', err);
      });
  };
  $scope.getChartData();

  $scope.getLorenzData = function(){
    getResults.getLorenzData(TimeFactory.getTime().dateObject.getTime())
      .then(function(results){
        var graph = new Rickshaw.Graph( {
          element: document.querySelector("#lorenzChart"),
          width: 400,
          height: 400,
          renderer: 'scatterplot',
          stroke: true,
          padding: { top: 0.05, left: 0.05, right: 0.05 },
          series: [ {
            data: results.data,
            color: 'green'
          } ]
        } );
        var yAxis = new Rickshaw.Graph.Axis.Y({
          graph: graph
        });
        var x_ticks = new Rickshaw.Graph.Axis.X({
          graph: graph,
          pixelsPerTick: 100,
          tickFormat: function(n) {
            var map = {
              0: '',
              1: '',
              2: '',
              3: '',
              4: ''
            };
            return map[n];
          }
        });      
        yAxis.render();
        x_ticks.render();
        graph.render();
      })
      .catch(function(err){
        console.log('$http error for lorenz chart', err);
      });
  };
  $scope.getLorenzData();

})

.factory('getResults', function ($http){

  return {
    getChartData: function (time){
      return $http({
        method: 'POST',
        url: '/users/analysis',
        data: {
          time: time
        }
      });
    },
    getLorenzData: function(time){
      return $http({
        method: 'POST',
        url: '/users/lorenz',
        data: {
          time: time
        }
      });
    }
  };

});