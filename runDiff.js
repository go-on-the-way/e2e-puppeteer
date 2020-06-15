const ora = require('ora')
let getDiff = require('./compare');

(async function(){
    const spinner = ora('start diff....\n');
    spinner.start();

    await getDiff();

    spinner.stop();
})();