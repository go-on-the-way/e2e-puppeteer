
const ora = require('ora')
let getContext = require('./src/getContext');
let login = require('./src/test/login');
let home = require('./src/test/home');
let role = require('./src/test/role');
let roleAdd = require('./src/test/role-add');

(async function(){
    const spinner = ora('running....')
    const context = await getContext();
    const page = context.page;
    const browser = context.browser;

    spinner.start()
    
    await login(page);
    await home(page);
    await role(page);
    await roleAdd(page);
    browser.close();

    spinner.stop();
})();

