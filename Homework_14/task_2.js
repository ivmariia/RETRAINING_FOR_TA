const { Builder, By, until, Actions } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

(async function testHover() {
    let options = new chrome.Options();
    options.addArguments('--headless'); 

    let driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();

    try {
        await driver.get('http://the-internet.herokuapp.com/hovers');

        let userAvatar = await driver.findElement(By.css('.figure img'));
        let actions = driver.actions({bridge: true});

        await actions.move({origin: userAvatar}).perform();

        let userText = await driver.wait(until.elementLocated(By.xpath("//h5[text()='name: user1']")), 5000);

        let isTextDisplayed = await userText.isDisplayed();

        if (isTextDisplayed) {
            console.log('Test Passed: "name: user1" text is displayed under the picture.');
        } else {
            console.log('Test Failed: "name: user1" text is not displayed.');
        }

    } finally {
        await driver.quit();
    }
})();