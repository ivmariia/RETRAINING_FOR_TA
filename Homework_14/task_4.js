const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

function isSortedAscending(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            return false;
        }
    }
    return true;
}

(async function testSortTable() {
    let options = new chrome.Options();
    options.addArguments('--headless'); 

    let driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();

    try {

        await driver.get('http://the-internet.herokuapp.com/tables');

        let secondTable = await driver.findElement(By.id('table2'));
        await driver.executeScript('arguments[0].scrollIntoView(true);', secondTable);

        let dueHeader = await driver.findElement(By.xpath('//table[@id="table2"]//th[4]'));
        await dueHeader.click();

        let dueColumnCells = await driver.findElements(By.xpath('//table[@id="table2"]//tr/td[4]'));
        let dueValues = [];

        for (let cell of dueColumnCells) {
            let text = await cell.getText();
            dueValues.push(parseFloat(text.replace('$', '').replace(',', '')));
        }

        if (isSortedAscending(dueValues)) {
            console.log('Test Passed: The "Due" column values are sorted in ascending order.');
        } else {
            console.log('Test Failed: The "Due" column values are not sorted in ascending order.');
        }

    } finally {
        await driver.quit();
    }
})();
