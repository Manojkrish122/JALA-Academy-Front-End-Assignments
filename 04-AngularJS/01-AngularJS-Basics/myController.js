// =============================================================================
// AngularJS Custom Controller in External File (myController.js)
// Demonstrates defining controller attached to 'basicsApp' module
// =============================================================================

app.controller('basicsMainCtrl', function($scope, $rootScope) {
    // 1. Initial color for text box background change (Question 1)
    $scope.boxBgColor = "#e0f2fe";

    // 2. Data binding variables for ng-model (Question 3)
    $scope.learnerName = "Rohit Verma";
    $scope.learnerGoal = "Front-End Developer";

    // 3. Controller-level $scope variable (Question 4)
    $scope.controllerScopedMessage = "I am a local variable inside $scope (basicsMainCtrl only)";

    // Method to toggle colors
    $scope.setColor = function(newColor) {
        $scope.boxBgColor = newColor;
    };
});

