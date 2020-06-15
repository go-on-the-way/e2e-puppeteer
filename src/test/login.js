module.exports = async (page) => {
    await page.screenshot({ path: 'imgs/login.png' });

    let username = await page.$("input[name='username']");
    await username.focus();
    await page.keyboard.type("wanglei",{ delay: 100 });

    let password = await page.$("input[name='password']");
    await password.focus();
    await page.keyboard.type("123456",{ delay: 100 });

    let loginBtn = await page.$("button");
    await loginBtn.click();

    return Promise.resolve(true);
}