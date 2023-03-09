// .vue 文件引入时，提示 找不到模块“xxx.vue”或其相应的类型声明
declare module "*.vue" {
  import { DefineComponent } from "vue";
  const component: DefineComponent<{},{}, any>
  export default component
}
