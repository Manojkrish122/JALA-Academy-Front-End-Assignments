// =============================================================================
// AngularJS Filters & Services Module (app.js)
// Demonstrates Built-in Filters, Custom Filter, Built-in Services ($location, $http, $timeout),
// Custom Service, HTTP GET/POST response inspection, and Angular Global APIs
// =============================================================================

var app = angular.module('filtersApp', []);

// -----------------------------------------------------------------------------
// Question 1: Custom Filter (Reverse String Filter)
// -----------------------------------------------------------------------------
app.filter('reverseText', function() {
    return function(input) {
        if (!input) return '';
        return input.split('').reverse().join('');
    };
});

// Custom Filter: Title Case Capitalization
app.filter('titleCase', function() {
    return function(input) {
        if (!input) return '';
        return input.replace(/\w\S*/g, function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    };
});

// -----------------------------------------------------------------------------
// Question 2: Custom Service (app.factory or app.service)
// -----------------------------------------------------------------------------
app.service('CalculationService', function() {
    this.calculateStipend = function(monthlyAmount, months) {
        return monthlyAmount * months;
    };
    
    this.formatCurrencyCode = function(amount, currencyCode) {
        return (currencyCode || "INR") + " " + amount.toLocaleString();
    };
});

// -----------------------------------------------------------------------------
// Controller with Services & APIs
// -----------------------------------------------------------------------------
app.controller('filtersCtrl', function($scope, $location, $timeout, $interval, $http, CalculationService) {
    
    // Sample Data for Filters (Question 1)
    $scope.currentDate = new Date();
    $scope.sampleText = "Full Stack Web Development with AngularJS";
    $scope.largeNumber = 1234567.8912;
    $scope.salary = 65000;

    // Services: $location, $timeout, $interval (Question 2)
    $scope.currentUrl = $location.absUrl();
    $scope.currentProtocol = $location.protocol();
    $scope.currentHost = $location.host();
    $scope.currentPort = $location.port();

    // $timeout service demo
    $scope.timeoutMessage = "Initializing timer...";
    $timeout(function() {
        $scope.timeoutMessage = "✅ $timeout service triggered successfully after 2 seconds!";
    }, 2000);

    // Custom Service integration
    $scope.months = 6;
    $scope.monthlyRate = 25000;
    $scope.totalCalculatedStipend = CalculationService.calculateStipend($scope.monthlyRate, $scope.months);
    $scope.formattedStipend = CalculationService.formatCurrencyCode($scope.totalCalculatedStipend, "INR");

    // Question 3: HTTP Methods get(), post() & properties (.config, .data, .status)
    $scope.httpResult = null;

    $scope.executeHttpGet = function() {
        // Calling public sample REST endpoint or local mock
        $http.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(function(response) {
                $scope.httpResult = {
                    method: "GET",
                    status: response.status,
                    statusText: response.statusText || "OK",
                    headers: response.headers(),
                    data: response.data,
                    config: {
                        method: response.config.method,
                        url: response.config.url
                    }
                };
            })
            .catch(function(error) {
                // Fallback simulation in offline environment
                $scope.httpResult = {
                    method: "GET (Simulated Response)",
                    status: 200,
                    statusText: "OK",
                    data: { id: 1, title: "AngularJS HTTP Service Demo", body: "Data retrieved successfully via $http.get()" },
                    config: { method: "GET", url: "/api/posts/1" }
                };
            });
    };

    $scope.executeHttpPost = function() {
        var payload = { title: "New Assignment", student: "Aarav Sharma", status: "Submitted" };
        
        $http.post('https://jsonplaceholder.typicode.com/posts', payload)
            .then(function(response) {
                $scope.httpResult = {
                    method: "POST",
                    status: response.status,
                    statusText: response.statusText || "Created",
                    data: response.data,
                    config: {
                        method: response.config.method,
                        url: response.config.url,
                        data: response.config.data
                    }
                };
            })
            .catch(function(error) {
                $scope.httpResult = {
                    method: "POST (Simulated Response)",
                    status: 201,
                    statusText: "Created",
                    data: { id: 101, title: "New Assignment", student: "Aarav Sharma", status: "Submitted" },
                    config: { method: "POST", url: "/api/posts", data: payload }
                };
            });
    };

    // Question 4: Angular Global APIs
    $scope.testString = "JALA ACADEMY FRONT-END ENGINEERING";
    $scope.apiResults = {
        lowercaseResult: angular.lowercase ? angular.lowercase($scope.testString) : $scope.testString.toLowerCase(),
        uppercaseResult: angular.uppercase ? angular.uppercase("angular expressions") : "angular expressions".toUpperCase(),
        isStringResult: angular.isString($scope.testString),
        isNumberResult: angular.isNumber(42),
        isDateResult: angular.isDate($scope.currentDate)
    };
});

