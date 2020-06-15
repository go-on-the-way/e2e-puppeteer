let Util = require('../util');
module.exports = async (page) => {
    await page.goto('http://localhost:9527/#/admin/role');
    await Util.sleep(2000);
    await page.screenshot({ path: 'imgs/role.png' });
    return Promise.resolve(true);
}