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