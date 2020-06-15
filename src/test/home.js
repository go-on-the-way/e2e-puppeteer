let Util = require('../util');
module.exports = async (page) => {
    await Util.sleep(2000);
    await page.screenshot({ path: 'imgs/main.png' });
    return Promise.resolve(true);
}