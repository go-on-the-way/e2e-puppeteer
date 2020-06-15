const puppeteer = require('puppeteer');
const initUrl = 'http://localhost:9527/#/login';

module.exports = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({
        width: 1912,
        height: 937,
        deviceScaleFactor: 1,
    });
    await page.goto(initUrl);
    return Promise.resolve({
        browser,
        page
    });
}