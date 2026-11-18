// =============================================================================
// AngularJS Elements, Validations, Animations & Routing Module (app.js)
// Demonstrates Form Elements, Native & Custom Validations, CSS Animations on ng-show/hide,
// and Single Page Application (SPA) Routing with ngRoute and $routeProvider.otherwise()
// =============================================================================

// Define module with ngRoute and ngAnimate dependencies
var app = angular.module('validationsApp', ['ngRoute', 'ngAnimate']);

// -----------------------------------------------------------------------------
// Question 4: SPA Routing Configuration with $routeProvider & otherwise()
// -----------------------------------------------------------------------------
app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'views/home.html',
            controller: 'RouteViewController'
        })
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'RouteViewController'
        })
        .when('/contact', {
            templateUrl: 'views/contact.html',
            controller: 'RouteViewController'
        })
        .otherwise({
            // Fallback route if path doesn't match
            redirectTo: '/home'
        });
});

app.controller('RouteViewController', function($scope) {
    // Route controller logic
});

// -----------------------------------------------------------------------------
// Question 2: Custom Validation Directive
// Custom validator: Enforces a 10-digit Indian Mobile Number
// -----------------------------------------------------------------------------
app.directive('customPhoneValidator', function() {
    return {
        require: 'ngModel',
        link: function(scope, element, attrs, ctrl) {
            // Add custom validator into ngModel's $validators pipeline
            ctrl.$validators.customPhone = function(modelValue, viewValue) {
                if (ctrl.$isEmpty(modelValue)) {
                    // Empty values pass this validator; 'required' attribute handles empty checks
                    return true;
                }
                // Check if exactly 10 digits
                var phoneRegex = /^[6-9]\d{9}$/;
                return phoneRegex.test(viewValue);
            };
        }
    };
});

// -----------------------------------------------------------------------------
// Main Controller: Form Elements, Validations & Animations
// -----------------------------------------------------------------------------
app.controller('validationsCtrl', function($scope) {
    
    // Question 1: Form Elements Data Model
    $scope.formData = {
        fullName: "",
        email: "",
        phone: "",
        selectedCourse: "Full Stack Development",
        gender: "Male",
        agreeTerms: false
    };

    $scope.courseOptions = [
        "Full Stack Development",
        "Front-End UI Engineering",
        "QA Automation & Selenium",
        "DevOps & Cloud Computing"
    ];

    $scope.submissionResult = null;

    $scope.submitForm = function(isValid) {
        if (isValid) {
            $scope.submissionResult = {
                status: "success",
                message: "🎉 Form successfully validated and submitted!",
                data: angular.copy($scope.formData)
            };
        } else {
            $scope.submissionResult = {
                status: "error",
                message: "⚠️ Form contains errors. Please correct invalid fields before submitting."
            };
        }
    };

    // Question 3: Animation toggle state for ng-show / ng-hide
    $scope.showAnimatedBox = true;

    $scope.toggleAnimation = function() {
        $scope.showAnimatedBox = !$scope.showAnimatedBox;
    };
});

