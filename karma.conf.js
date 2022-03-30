// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

// These lines ensure Chromium is installed on the machine that's going to execute the tests
// so that they can be run headlessly by a build agent
// https://medium.com/@metalex9/replace-phantomjs-with-headless-chromium-for-javascript-unit-testing-in-karma-59812e6f8ce4

const puppeteer = require('puppeteer');
process.env.CHROME_BIN = puppeteer.executablePath();

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('karma-junit-reporter'),
      require('@angular-devkit/build-angular/plugins/karma'),
    ],
    client: {
      clearContext: false, // leave Jasmine Spec Runner output visible in browser
      jasmine: {
        failSpecWithNoExpectations: true,
      },
    },
    reporters: ['progress', 'kjhtml', 'junit', 'coverage'],
    coverageReporter: {
      dir: require('path').join(__dirname, 'TestResults/coverage'),
      subdir: '.',
      reporters: [
        { type: 'html' },
        { type: 'text-summary' },
        { type: 'cobertura' },
        { type: 'lcovonly' },
      ],
      check: {
        global: {
          statements: 80,
          branches: 80,
          functions: 80,
          lines: 80,
        },
      },
    },
    junitReporter: {
      outputDir: 'TestResults', // results will be saved as $outputDir/$browserName.xml
      outputFile: 'TEST-unit_tests.xml', // if included, results will be saved as $outputDir/$browserName/$outputFile
      suite: '', // suite will become the package name attribute in xml testsuite element
      useBrowserName: true, // add browser name to report and classes names
      nameFormatter: undefined, // function (browser, result) to customize the name attribute in xml testcase element
      classNameFormatter: undefined, // function (browser, result) to customize the classname attribute in xml testcase element
      xmlVersion: null, // use '1' if reporting to be per SonarQube 6.2 XML format
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    restartOnFileChange: true,
  });
};
