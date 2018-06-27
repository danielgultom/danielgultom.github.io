var webdriver = require('selenium-webdriver'),
    username = "dgultom",
    accessKey = "92b0227a-5413-438b-b0de-ef07f87f8dce",
    driver;
 
driver = new webdriver.Builder().
  withCapabilities({
    'browserName': 'chrome',
    // 'platform': 'Windows XP',
    // 'version': '43.0',
    'username': username,
    'accessKey': accessKey
  }).
  usingServer("http://" + username + ":" + accessKey +
              "@ondemand.saucelabs.com:80/wd/hub").
  build();
 
driver.get("https://danielhamg.github.io/testSite/homeTest");
 
driver.getTitle().then(function (title) {
    console.log("title is: " + title);
});
 
driver.quit();