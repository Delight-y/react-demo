/**
 * vscode：教程
 * vscode请安装Prettier，Eslint两个插件，并设置以下内容到工作区（或者用户）
 * 特别注意，右下角Prettier要双勾才表示配置成功，否则请点击在弹窗选择Allow Everywhere
 * 关于windows系统Delete 'CR' eslint警告解决,vscode右下角CRLF改为LF
 * {
    // Enable per-language
    "[javascript]": {
        "editor.formatOnSave": true,
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    //.vue文件template格式化支持，并使用js-beautify-html插件
    "vetur.format.defaultFormatter.html": "js-beautify-html",
    //js-beautify-html格式化配置，属性强制换行
    "vetur.format.defaultFormatterOptions": {
        "js-beautify-html": {
            "wrap_attributes": "force-aligned"
        }
    },
    //根据文件后缀名定义vue文件类型
    "files.associations": {
        "*.vue": "vue"
    },
    //配置 ESLint 检查的文件类型
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        {
            "language": "vue",
            "autoFix": true
        }
    ],
    //保存时eslint自动修复错误
    "eslint.autoFixOnSave": true,
    //保存自动格式化
    "editor.formatOnSave": true,
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    }
}
 * WebStorm：教程
 * 进入 WebStorm preferences -> Language & Framework -> JavaScript -> Prettier
 * prettier package 选择 /node_modules/prettier
 *Run for files 添加你需要格式化的文件类型
 * 开启 on save on 及 code reformat
 */
module.exports = {
    printWidth: 100, // 超过最大值换行
    tabWidth: 4, // tab缩进大小,默认为2
    useTabs: false, // 使用tab缩进，默认false
    semi: false, // 结尾使用分号, 默认true
    singleQuote: true, // 使用单引号, 默认false
    TrailingCooma: 'all', // 行尾逗号,默认none,可选 none|es5|all es5 包括es5中的数组、对象，all 包括函数对象等所有可选
    bracketSpacing: true, // 对象中的空格 默认true，true: { foo: bar }，false: {foo: bar}
    jsxBracketSameLine: false,
    arrowParens: 'avoid', // 箭头函数参数括号 默认avoid 可选 avoid| always， avoid 能省略括号的时候就省略 例如x => x，always 总是有括号
}
