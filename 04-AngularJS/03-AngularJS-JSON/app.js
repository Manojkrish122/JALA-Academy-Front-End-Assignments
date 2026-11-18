// =============================================================================
// AngularJS JSON & Options Module (app.js)
// Demonstrates loading JSON into tables, sorting via orderBy filter,
// zebra striping with $odd and $even, $index, and ng-options vs ng-repeat
// =============================================================================

var app = angular.module('jsonApp', []);

app.controller('jsonCtrl', function($scope, $http) {
    
    // Sort configuration
    $scope.sortColumn = 'name';
    $scope.reverseSort = false;

    $scope.sortBy = function(column) {
        if ($scope.sortColumn === column) {
            $scope.reverseSort = !$scope.reverseSort;
        } else {
            $scope.sortColumn = column;
            $scope.reverseSort = false;
        }
    };

    // Default employees data
    $scope.employees = [
        { id: 101, name: "Aarav Sharma", department: "UI Development", salary: 75000, city: "Bangalore" },
        { id: 102, name: "Bhavna Patel", department: "QA Automation", salary: 68000, city: "Pune" },
        { id: 103, name: "Chetan Reddy", department: "Cloud & DevOps", salary: 85000, city: "Hyderabad" },
        { id: 104, name: "Diya Sen", department: "UI Development", salary: 72000, city: "Kolkata" },
        { id: 105, name: "Eshwar Rao", department: "Full Stack Java", salary: 80000, city: "Chennai" },
        { id: 106, name: "Farhan Khan", department: "QA Automation", salary: 65000, city: "Mumbai" }
    ];

    // Attempting to load from external employees.json via $http
    $http.get('employees.json')
        .then(function(response) {
            if (response.data && Array.isArray(response.data)) {
                $scope.employees = response.data;
            }
        })
        .catch(function(err) {
            console.log("Loaded default bundled JSON array dataset.");
        });

    // Question 2: Spot the difference between ng-options and ng-repeat
    // Complex Objects for Selection
    $scope.technologyOptions = [
        { id: 1, name: "HTML5 & CSS3", level: "Beginner", track: "UI Foundation" },
        { id: 2, name: "JavaScript ES6+", level: "Intermediate", track: "Core Logic" },
        { id: 3, name: "AngularJS & Angular", level: "Advanced", track: "Frameworks" },
        { id: 4, name: "Node.js & Express", level: "Advanced", track: "Backend API" }
    ];

    // Model bound to ng-options (Binds directly to entire selected object)
    $scope.selectedOptionObject = $scope.technologyOptions[0];

    // Model bound to ng-repeat (Binds to stringified value or manual attribute)
    $scope.selectedRepeatValue = $scope.technologyOptions[0].name;
});

