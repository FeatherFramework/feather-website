import DefaultTheme from "vitepress/theme";
import './tailwind.postcss'
import "./custom.css";


import Locale from './Locale.vue'

export default {
  ...DefaultTheme,
  // override the Layout with a wrapper component that
  // injects the slots
  Layout: Locale
}