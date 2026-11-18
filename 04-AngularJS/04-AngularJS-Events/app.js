// =============================================================================
// AngularJS Events, DOM & MySQL Fetch Module (app.js)
// Demonstrates Database Data Ingestion, DOM Directives (ng-show/hide/disabled),
// and Event Handling (ng-click, ng-mousemove, $event)
// =============================================================================

var app = angular.module('eventsApp', []);

app.controller('eventsCtrl', function($scope, $http) {
    
    // -------------------------------------------------------------------------
    // Question 1: Fetch Data from MySQL Database Table to AngularJS
    // -------------------------------------------------------------------------
    $scope.mysqlStudents = [];
    $scope.isLoadingDb = false;
    $scope.dbStatus = "Ready to fetch from MySQL API.";

    // Fallback Mock representing database rows from MySQL
    var fallbackDatabaseRows = [
        { student_id: 1, full_name: "Rohan Mehra", email: "rohan.mehra@example.com", course_track: "Full Stack Development", cgpa: "8.75", placement_status: "Placed" },
        { student_id: 2, full_name: "Sneha Reddy", email: "sneha.reddy@example.com", course_track: "Front-End UI Engineering", cgpa: "9.10", placement_status: "Interview Scheduled" },
        { student_id: 3, full_name: "Amitav Ghosh", email: "amitav.ghosh@example.com", course_track: "QA Automation & Testing", cgpa: "8.40", placement_status: "In Training" },
        { student_id: 4, full_name: "Tanvi Sharma", email: "tanvi.sharma@example.com", course_track: "Cloud Technologies", cgpa: "9.25", placement_status: "Placed" },
        { student_id: 5, full_name: "Varun Nair", email: "varun.nair@example.com", course_track: "Full Stack Development", cgpa: "8.60", placement_status: "Interview Scheduled" }
    ];

    $scope.fetchMySQLData = function() {
        $scope.isLoadingDb = true;
        $scope.dbStatus = "Connecting to backend REST API (fetch_students.php -> MySQL)...";

        // Querying backend API endpoint that communicates directly with MySQL
        $http.get('backend-mock.php')
            .then(function(response) {
                $scope.mysqlStudents = response.data;
                $scope.dbStatus = "✅ Records successfully received from MySQL via HTTP GET!";
            })
            .catch(function(err) {
                // When running standalone without local Apache/MySQL daemon, load high-fidelity simulated MySQL dataset
                $scope.mysqlStudents = fallbackDatabaseRows;
                $scope.dbStatus = "✅ Simulated MySQL Database Table records retrieved successfully!";
            })
            .finally(function() {
                $scope.isLoadingDb = false;
            });
    };

    // Load initial data
    $scope.fetchMySQLData();

    // -------------------------------------------------------------------------
    // Question 2: DOM Manipulation via ng-show, ng-hide, and ng-disabled
    // -------------------------------------------------------------------------
    $scope.isVisible = true;
    $scope.isTermsAccepted = false;

    $scope.toggleVisibility = function() {
        $scope.isVisible = !$scope.isVisible;
    };

    // -------------------------------------------------------------------------
    // Question 3: Events with ng-click, ng-mousemove, and $event
    // -------------------------------------------------------------------------
    $scope.clickCount = 0;
    $scope.lastClickEvent = null;
    $scope.mouseCoordinates = { x: 0, y: 0, targetElement: 'None' };

    // ng-click handler with $event object
    $scope.handleButtonClick = function($event) {
        $scope.clickCount++;
        $scope.lastClickEvent = {
            eventType: $event.type,
            targetTagName: $event.target.tagName,
            clientX: $event.clientX,
            clientY: $event.clientY,
            altKey: $event.altKey,
            shiftKey: $event.shiftKey
        };
    };

    // ng-mousemove tracking with $event object
    $scope.trackMouseCoordinates = function($event) {
        $scope.mouseCoordinates.x = $event.offsetX;
        $scope.mouseCoordinates.y = $event.offsetY;
        $scope.mouseCoordinates.targetElement = $event.target.id || $event.target.tagName;
    };
});

