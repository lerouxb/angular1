module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      'dist/bundle.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'app/*/*_test.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
