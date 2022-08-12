const fs = require('fs')
const path = require('path')
//读取prettier配置
const prettierOptions = JSON.parse(fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'))

module.exports = {
    root: true,
    env: {
        //指定代码的运行环境
        jest: true,
        browser: true,
        node: true,
        es6: true,
    },
    parser: '@typescript-eslint/parser',
    // 使用 airbnb 拓展插件规范相关库
    // prettier 已内置了许多相关插件
    extends: ['airbnb','airbnb/hooks','airbnb-typescript', 'plugin:@typescript-eslint/recommended', 'prettier'],
    // 拓展和支持相关能力的插件库
    plugins: ['react', 'react-hooks', '@typescript-eslint'],
    parserOptions: {
        //指定要使用的es版本
        ecmaVersion: 6,
        //向后兼容
        createDefaultProgram: true,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
            globalReturn: true,
        },
        project: './tsconfig.json',
        // project: {},
    },
    rules: {
        'space-before-function-paren': 0, //函数定义时括号前面要有空格
        'no-console': 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'prettier/prettier': ['error', prettierOptions],
        //  React组件名使用帕斯卡命名, 实例使用骆驼式命名
        'react/jsx-pascal-case': 1,
        // 解构赋值
        'react/destructuring-assignment': [0, 'always'],
        // 多余的依赖
        'import/no-extraneous-dependencies': 'off',
        // 对于没有子元素的标签来说总是自己关闭标签
        'react/self-closing-comp': 1,
    },
}
