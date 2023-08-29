import * as React from "react"
import Svg, { Path , SvgProps} from "react-native-svg"

const Logout = ({color,width,height,style}:SvgProps)  => {
    return (
        <Svg
        style={style}
        height={height}
        viewBox="0 -960 960 960"
        width={width}
         fill={color} >
      <Path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h299v60H180v600h299v60H180zm486-185l-43-43 102-102H360v-60h363L621-612l43-43 176 176-174 174z" />
    </Svg>)
}

export default Logout;
