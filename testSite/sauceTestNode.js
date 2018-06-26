

var webdriver = require('selenium-webdriver'),
    username = "dgultom",
    accessKey = "92b0227a-5413-438b-b0de-ef07f87f8dce",
    driver;
 
driver = new webdriver.Builder().
  withCapabilities({
    'browserName': 'chrome',
    // doesn't support the platform & version
    // 'platform': 'Windows XP',
    // 'version': '43.0',
    'username': username,
    'accessKey': accessKey
  }).
  usingServer("http://" + username + ":" + accessKey +
              "@ondemand.saucelabs.com:80/wd/hub").
  build();
 
driver.get("https://danielhamg.github.io/testSite/homeTest");

var document = driver.body;
console.log(document);
// runTests();
 




driver.getTitle().then(function (title) {
    // console.log("title is: " + title);
    console.log("Title is: danielhamg?");
    // runTests();
});
 
driver.quit();



function findBrokenImages() {
  var failedImages = [];
  for (i = 0; i < document.getElementsByTagName("img").length; i++) {
    var pic = document.getElementsByTagName("img")[i];
    if (!pic.complete || pic.naturalHeight === 0) {
      failedImages.push(pic.src);
    } else {
      ;
    }
  }

  if (failedImages.length > 0) {
    var failure = " ";
    for (i = 0; i < failedImages.length; i++) {
      failure += failedImages[i];
      failure += "      ";
    }
    return("These images failed to load: " + failure);
  } else {
    return("No broken images found");
  }
}

function findBrokenLinks() {
  return("Have not yet implemented findBrokenLinks");
}


////////////////////////////////////////////////////////////
/////////////////////////////////////////// running tests///
////////////////////////////////////////////////////////////


function runTests() {
  console.log(findBrokenImages());
  console.log(findBrokenLinks());
}


