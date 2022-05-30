module.exports = {
  title: "wocwin前端文档库",
  description: "技术分享及基础组件使用",
  base: "/t-ui/",
  // port: 6666,
  // dest: './dist',   // 设置输出目录
  head: [
    [
      "link",
      { rel: "shortcut icon", type: "image/x-icon", href: `./favicon.ico` },
    ],
  ],
  markdown: {
    // lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    // 你的GitHub仓库，请正确填写
    repo: "https://github.com/wocwin/t-ui",
    // 自定义仓库链接文字。
    repoLabel: "GitHub",
    nav: [
      { text: "主页", link: "/" },
      { text: "实际项目问题", link: "/projectProblem/permission" },
      {
        text: "基础组件",
        link: "/baseComponents/AntDesign/TAntLayoutConditional/base",
      },
      // { text: '更新日志', link: '/changeLog/log' },
      { text: "Gitee码云", link: "https://gitee.com/wocwin/t-ui" },
    ],
    sidebar: {
      "/projectProblem/": [
        {
          title: "Vue项目",
          collapsable: false,
          children: ["permission", "keepAlive", "axios"],
        },
      ],
      "/baseComponents/": [
        {
          title: "基于AntDesign封装",
          collapsable: true,
          children: [
            {
              title: "常用组件",
              collapsable: false,
              children: [
                "AntDesign/TAntLayoutConditional/base", // 筛选器布局组件
                "AntDesign/TAntLayoutTable/base", // 默认table布局组件
                "AntDesign/TAntLayoutForm/base", // 配置化表单组件
                "AntDesign/TAntModal/base", // 弹窗组件
              ],
            },
          ],
        },
      ],
    },
  },
  chainWebpack(config) {
    config.resolve.alias.set("core-js/library/fn", "core-js/features");
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: [
            "cache-loader",
            {
              loader: "babel-loader",
              options: {
                babelrc: false,
                configFile: false,
                presets: [
                  "@babel/preset-env", // 可以识别es6语法
                  "@vue/babel-preset-jsx", // 解析jsx语法
                ],
              },
            },
            {
              loader: "ts-loader",
              options: {
                appendTsxSuffixTo: [/\.vue$/, /\.md$/],
              },
            },
          ],
        },
      ],
    },
  },
  plugins: [
    [
      "vuepress-plugin-typescript",
      {
        tsLoaderOptions: {
          // ts-loader 的所有配置项
        },
      },
    ],
    // ['@vuepress/plugins-back-to-top', false],
    [
      "vuepress-plugin-gotop-plus",
      {
        // mobileShow: false,
        threshold: 150,
      },
    ],
    "@vuepress-reco/extract-code",
  ],
};
