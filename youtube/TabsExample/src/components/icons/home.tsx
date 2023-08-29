import * as React from "react"
import Svg, { Path , SvgProps} from "react-native-svg"

const HomeIcon = ({color,width,height,style}:SvgProps)  => {
  return (
    <Svg
    style={style}
    height={height}
    viewBox="0 -960 960 960"
    width={width}
     fill={color} >
      <Path d="M220-180h150v-250h220v250h150v-390L480-765 220-570v390zm-60 60v-480l320-240 320 240v480H530v-250H430v250H160zm320-353z" />
    </Svg>
  )
}

export default HomeIcon