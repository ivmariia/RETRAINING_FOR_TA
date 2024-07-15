const { Builder, By } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

(async function testDropdown() {
    let options = new chrome.Options();
    options.addArguments('--headless'); 
        
    let driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();

    try {

        await driver.get('http://the-internet.herokuapp.com/dropdown');
        
        let dropdown = await driver.findElement(By.id('dropdown'));
        let options = await dropdown.findElements(By.tagName('option'));
        let firstOption = options[0];
        let secondOption = options[1];
        let isFirstOptionEnabled = await firstOption.isEnabled();
        let isSecondOptionEnabled = await secondOption.isEnabled();

        console.log(`1st element is ${isFirstOptionEnabled ? 'active' : 'inactive'}.`);
        console.log(`2nd element is ${isSecondOptionEnabled ? 'active' : 'inactive'}.`);

        if (!isFirstOptionEnabled && isSecondOptionEnabled) {
            console.log('Test Passed: The 1st element is inactive and the 2nd element is active.');
        } else {
            console.log('Test Failed: The conditions are not met.');
        }

    } finally {
        await driver.quit();
    }
})();
