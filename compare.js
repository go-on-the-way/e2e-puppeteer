const resemble = require("resemblejs")
const fs = require("fs");

async function getDiff() {
    let img1 = fs.readFileSync('./imgs/first-test/role-add-result.png');
    let img2 = fs.readFileSync('./imgs/role-add-result.png');

    resemble.outputSettings({
        errorColor: {
            red: 255,
            green: 0,
            blue: 0
        },
        errorType: "movement",
        transparency: 0.3,
        largeImageThreshold: 0,
        useCrossOrigin: false,
        outputDiff: true
    });

    await resemble(img1)
    .compareTo(img2)
    .ignoreColors()
    .onComplete(function(data) {
        if(!data.error){
            console.log(data);
            console.log();
            fs.writeFile('./compared/role-add-result--compare.png',data.getBuffer(),(err)=>{
                if (err) throw err;
                console.log('对比图片生成成功!');
            });
        }
    });
}

module.exports = getDiff;