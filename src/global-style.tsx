import { createGlobalStyle } from 'styled-components'
import { accent } from './constants/theme'
import './fonts.css'
import './tailwind.css'
import tw from 'tailwind.macro'

export default createGlobalStyle`
  body {
    ${tw`m-0 p-0 font-sans bg-gray-900 text-white`};
    -webkit-text-size-adjust: 100%;
    width: 100vw;
    max-width: 100vw;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    -webkit-font-feature-settings: "pnum";
    font-feature-settings: "pnum";
    font-variant-numeric: proportional-nums;
  }
  h1, h2, h3, h4, h5, h6 {
    ${tw`font-condensed tracking-widest`}
  }
`
