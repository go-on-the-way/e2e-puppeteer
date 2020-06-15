let Util = require('../util');
module.exports = async (page) => {
    let roleInput;
    let saveBtn;
    let addBtn = await page.$(".tools button");
    await addBtn.click();

    await Util.sleep(500);
    roleInput = await page.$(".el-dialog__body input");
    await roleInput.focus();
    await page.keyboard.type("testRole0000",{ delay: 100 });
    await page.screenshot({ path: 'imgs/role-add.png' });

    saveBtn = await page.$("#saveBtn");
    await saveBtn.click();
    await Util.sleep(2000);
    await page.screenshot({ path: 'imgs/role-add-result.png' });

    return Promise.resolve(true);
}