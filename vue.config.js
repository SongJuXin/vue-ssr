

module.exports={

    lintOnSave:false,//去掉eslint
    chainWebpack:config=>{
        //config的add、prepend、clear等方法 见node_modules/webpack-chain/src/Chainable.js
        if(process.env.server){
            //不启用chunk
            //config.optimization.splitChunks()

            //删除css的一切rule
            config.module.rules.delete('css')

            //config.plugins.delete('extract-css')
        }
        //替换npm run serve时的入口
        config.entry('app').add('./src/entry-client.js').delete('./src/main.js')


        //关掉压缩
        //config.optimization.minimize(false)

        //配置模板
        /*config.plugin('html',).tap(args=>{
            args[0].template='src/index.html'
            return args
        })*/
    },

}
