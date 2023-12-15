/*
 * @Author: lili11.yang
 * @Date: 2023-12-14 14:37:26
 * @Description: 
 * @LastEditors: lili11.yang
 * @LastEditTime: 2023-12-15 15:41:15
 */
declare module '*.css' {
    const style: { [className: string]: string }
    export default style
}
declare module '*.scss'
declare module '*.tsx'
declare module '*.png' {
    const value: any;
    export default value
}
declare module '*.jpg' {
    const value: any;
    export default value
}