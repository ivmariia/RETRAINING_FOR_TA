const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const logging = require('selenium-webdriver/lib/logging');

(async function testForm() {
    let options = new chrome.Options();
    options.addArguments('--headless'); 
    const prefs = new logging.Preferences();
    prefs.setLevel(logging.Type.BROWSER, logging.Level.OFF);
    options.setLoggingPrefs(prefs);

    let driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();

    try {
        
        await driver.get('http://formy-project.herokuapp.com/form');

        await driver.findElement(By.id('first-name')).sendKeys('Peter');
        await driver.findElement(By.id('last-name')).sendKeys('Peterson');
        await driver.findElement(By.id('job-title')).sendKeys('tester');
        await driver.findElement(By.id('radio-button-2')).click(); 
        await driver.findElement(By.id('checkbox-1')).click();
        await driver.findElement(By.css('option[value="2"]')).click(); 
        await driver.findElement(By.id('datepicker')).sendKeys('12/12/2020');
        await driver.findElement(By.css('.btn.btn-lg.btn-primary')).click();
        
        let successMessage = await driver.wait(until.elementLocated(By.css('.alert.alert-success')), 5000);
        let messageText = await successMessage.getText();

        if (messageText.includes('The form was successfully submitted!')) {
            console.log('Test Passed: The form was successfully submitted!');
        } else {
            console.log('Test Failed: Success message not found.');
        }

    } finally {
        await driver.quit();
    }
})();
