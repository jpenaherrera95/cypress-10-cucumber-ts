const report = require("multiple-cucumber-html-reporter");
report.generate({
  jsonDir: "cypress/reports", // ** Path of .json file **//
  reportPath: "cypress/reports/cucumber-htmlreport.html",
  metadata: {
    browser: {
      name: "chrome",
      version: "120",
    },
    device: "Local test machine",
    platform: {
      name: "Mac",
      version: "Sonoma",
    },
  },
});