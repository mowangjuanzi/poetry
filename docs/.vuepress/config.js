const {defaultTheme} = require("vuepress");

module.exports = {
    title: "诗词",
    lang: "zh-CN",
    repo: 'mowangjuanzi/poetry',
    theme: defaultTheme({
        navbar: [
            '/glossary.md',
            "/changelog.md",
        ],
        sidebar: [
            "/README.md",
            {
                text: "汉",
                link: "/han",
                children: [
                    {
                        text: "佚名",
                        link: "/han/yiming.md",
                    }
                ]
            },
            {
                text: '宋',
                link: '/song',
                children: [
                    {
                        text: "范成大",
                        link: "/song/fanchengda.md",
                    },
                    {
                        text: '秦观',
                        link: '/song/qinguan.md',
                    },
                    {
                        text: "晏几道",
                        link: "/song/qinguan.md",
                    },
                    {
                        text: "晏殊",
                        link: "/song/yanshu.md",
                    }
                ],
            },
        ],
    }),
};