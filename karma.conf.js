module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: './',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'sinon-chai'],


    // list of files / patterns to load in the browser
    files: [
      'client/lib/es5-shim/es5-shim.min.js',
      'client/lib/jquery/dist/jquery.min.js',
      'client/lib/underscore/underscore-min.js',
      'client/lib/angular/angular.js',
      'client/lib/angular-mocks/angular-mocks.js',
      'client/lib/angular-ui-router/release/angular-ui-router.js',
      'client/lib/rickshaw/vendor/d3.min.js',
      'client/lib/rickshaw/rickshaw.js',
      'client/lib/oboe/dist/oboe-browser.min.js',
      'client/lib/moment/min/moment.min.js',
      'client/lib/angular-aria/angular-aria.js',
      'client/lib/angular-animate/angular-animate.js',
      'client/lib/hammerjs/hammer.js',
      'client/lib/angular-material/angular-material.js',
      'client/lib/bootstrap/dist/js/bootstrap.min.js',
      'client/lib/bootstrap-material-design/dist/js/ripples.min.js',
      'client/lib/bootstrap-material-design/dist/js/material.min.js',
      'client/app.js',
      'client/components/web/analysis/main.js',
      'client/choose/choose.js',
      'client/components/web/**/*.js',
      'client/components/developer/**/*.js',
      'client/components/signin/**/*.js',
      'client/test/*.js'
    ],


    // list of files to exclude
    exclude: [
      'node_modules'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    // preprocessors: {
    //   'client/**/*.js': ['coverage']
    // },

    // coverageReporter: {
    //   // type : 'html',
    //   type : 'text-summary',
    //   dir : 'coverage/'
    // },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};