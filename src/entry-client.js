import { createApp } from './main'

// 客户端特定引导逻辑……

const { app,router } = createApp()

router.onReady(()=>{
    app.$mount('#app')

})
