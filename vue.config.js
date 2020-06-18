const path    = require('path');

function resolve(dir) {
    return path.join(__dirname, dir);
}
module.exports = {
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('@C', resolve('src/components'))
            .set('@style', resolve('src/resources/scss'))
    },
}