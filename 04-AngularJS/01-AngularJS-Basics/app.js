// =============================================================================
// AngularJS Basics Module Definition (app.js)
// Declares 'basicsApp' module and configures $rootScope
// =============================================================================

// Define module
var app = angular.module('basicsApp', []);

// Configure $rootScope (Question 4)
app.run(function($rootScope) {
    // $rootScope is accessible across the entire application and all child controllers
    $rootScope.appTitle = "JALA Academy AngularJS Basics Portal";
    $rootScope.sharedGlobalStatus = "Active Student Environment (Global $rootScope)";
});

