// =============================================================================
// AngularJS Custom Directive in External File (myDirective.js)
// Demonstrates defining reusable component directive on 'basicsApp' module
// =============================================================================

app.directive('customCourseBanner', function() {
    return {
        restrict: 'EA', // Restrict to Element or Attribute
        scope: {
            courseName: '@',
            duration: '@'
        },
        template: `
            <div style="background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%); border-left: 5px solid #22c55e; padding: 15px; border-radius: 6px; margin: 12px 0;">
                <h4 style="color: #15803d; margin: 0 0 6px 0;">🎓 Custom Directive: {{courseName}}</h4>
                <p style="color: #166534; font-size: 0.9rem; margin: 0;">
                    Course Track Duration: <strong>{{duration}}</strong> | Loaded from external <code>myDirective.js</code>.
                </p>
            </div>
        `
    };
});

