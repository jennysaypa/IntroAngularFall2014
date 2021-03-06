(function() {

angular.module('SIApp', [])

.controller('SICtrl', ['$scope','$interval', function ($scope,$interval) { // scope is object that corresponds to the html element
    function getRightmostPosition(){ // returns column of rightmost invader
        var rightmostInvaderPosition = 0;
        for(var i=0; i<$scope.spaceInvaders.length; i++){
            if ($scope.spaceInvaders[i].show && $scope.spaceInvaders[i].column > rightmostInvaderPosition){
                rightmostInvaderPosition = $scope.spaceInvaders[i].column;
            }
        }
        return rightmostInvaderPosition;
    }
    function getLeftmostPosition(){ // returns column of rightmost invader
        var leftmostInvaderPosition = TOTAL_COLUMNS-1;
        for(var i=0; i<$scope.spaceInvaders.length; i++){
            if ($scope.spaceInvaders[i].show && $scope.spaceInvaders[i].column < leftmostInvaderPosition){
                leftmostInvaderPosition = $scope.spaceInvaders[i].column;
            }
        }
        return leftmostInvaderPosition;
    }
    function getBottommostPosition(){ // returns row of the bottommost invader
        var bottommostInvaderPosition = 0;
        for(var i=0; i<$scope.spaceInvaders.length; i++){
            if ($scope.spaceInvaders[i].show && $scope.spaceInvaders[i].row > bottommostInvaderPosition){
                bottommostInvaderPosition = $scope.spaceInvaders[i].row;
            }
        }
        return bottommostInvaderPosition;
    }
}]);

})();
