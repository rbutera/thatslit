import { createGlobalStyle } from 'styled-components'
import { accent } from './constants/theme'
import './fonts.css'
import tw from 'tailwind.macro'

export default createGlobalStyle`
  body {
    ${tw`font-sans bg-gray-900 text-white`};
    
    -webkit-text-size-adjust: 100%;
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
