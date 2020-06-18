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
    devServer:{
        host:'localhost',
        port:8080,
        proxy:{
          '/api':{
            target:'http://mall-pre.springboot.cn',
            changeOrigin:true,
            pathRewrite:{
              '/api':''
            }
          }
        }
    }
}