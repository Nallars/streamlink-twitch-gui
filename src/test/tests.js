define(function( require ) {

	// load requirejs app-config
	require( [ "../app/config" ], function() {

		window.process = window._process;

		// adjust paths to the test environment
		requirejs.config({
			"baseUrl": "../app",

			"shim": {
				"EmberTest": [ "Ember", "EmberData", "EmberHtmlbars" ]
			},

			"paths": {
				"EmberTest": "../vendor/ember/ember-testing",

				// Test paths
				"test": "../test/tests"
			}
		});


		require( [ "json!../test/tests", "EmberTest" ], function( tests ) {
			// then load tests and start QUnit
			require( tests.tests, QUnit.start );
		});

	});

});
