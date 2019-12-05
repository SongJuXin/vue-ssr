//此文件会依赖src
const path=require('path')
const ROOT_PATH = process.cwd();
const {createBundleRenderer} = require('vue-server-renderer')
const express = require('express')
const server = express()
const template = require('fs').readFileSync(ROOT_PATH+'/src/index.html', 'utf-8')
const serverBundle = require(ROOT_PATH + '/dist/vue-ssr-server-bundle.json')
const clientManifest = require(ROOT_PATH + '/dist/vue-ssr-client-manifest.json')
import {createRouter} from '../src/router'

const router = createRouter()
const routes = router.options.routes.map(item => item.path)
const renderer = createBundleRenderer(serverBundle, {
    runInNewContext: false,
    template,
    clientManifest,
})

server.get(routes, (req, res) => {
    const context = {url: req.url, title: '这是title'}
    renderer.renderToString(context, (err, html) => {
        if (err) {
            res.status(500).end('Internal Server Error')
            return
        }
        res.end(html)
    })
})
server.use(express.static('dist'))

server.listen(8080, function (req, res) {
    console.log('8080 已起动')
})
