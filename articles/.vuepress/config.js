const sidebar = require('./sidebar.json')
module.exports = {
    title: '新生命开发团队文档中心',
    description: '新生命团队基础框架X组件，包括日志、数据库、网络、RPC、序列化、缓存、Windows服务、多线程等模块，支持.Net Framework/.netstandard/Mono',
    dest: 'vuepress',
    base: '', // 基本路径
    serviceWorker: true,
    locales: {
        '/': {
            lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
        }
    },
    head: [
        ['link', {
            rel: 'icon',
            href: `/logo.png`
        }],
        ['link', {
            rel: 'manifest',
            href: '/manifest.json'
        }],
        ['meta', {
            name: 'theme-color',
            content: '#3ab1ff'
        }],
        ['meta', {
            name: 'apple-mobile-web-app-capable',
            content: 'yes'
        }],
        ['meta', {
            name: 'apple-mobile-web-app-status-bar-style',
            content: 'black'
        }],
        ['link', {
            rel: 'apple-touch-icon',
            href: `/logo.jpg`
        }],
        // ['link', {
        //     rel: 'mask-icon',
        //     href: '/icons/safari-pinned-tab.svg',
        //     color: '#3ab1ff'
        // }],
        ['meta', {
            name: 'msapplication-TileImage',
            content: '/logo.jpg'
        }],
        ['meta', {
            name: 'msapplication-TileColor',
            content: '#000000'
        }]
    ],
    lastUpdated: '上次更新',
    // theme: 'vue',
    themeConfig: {
        repo: 'NewLifeX/XDoc',
        docsDir: 'articles',
        repoLabel: '查看源码',
        editLinks: true,
        editLinkText: '帮助我们改善此页面！',
        lastUpdated: '上次更新',
        next: true,
        nav: [
            {
                text: 'XCode',
                items:[
                    {
                        text: 'XCode',
                        link: '/XCode/'
                    },{
                        text: 'CURD基础使用',
                        link: '/CURD基础使用/'
                    },{
                        text: 'XML模型文件',
                        link: '/XML模型文件/'
                    },{
                        text: '分表分库',
                        link: '/分表分库/'
                    },{
                        text: '高级功能',
                        link: '/高级功能/'
                    }
                ]
            },
            {
                text: 'DotNetCore',
                link: '/DotNetCore/'
            },
            {
                text: '魔方',
                items: [{
                    text: 'FX版',
                    link: '/Cube/'
                }, {
                    text: 'Core版',
                    link: '/CubeCore/'
                }]
            },{
                text:'网络库',
                link:'/Net/'
            },{
                text:'Redis',
                link:'/Redis/'
            }
        ],
        sidebar: sidebar
    }
}