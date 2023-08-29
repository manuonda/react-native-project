import * as React from "react"
import Svg, { Path , SvgProps} from "react-native-svg"

const AboutIcon = ({color,width,height,style}:SvgProps)  => {
  return (
    <Svg
    style={style}
    height={height}
    viewBox="0 -960 960 960"
    width={width}
     fill={color} >
      <Path d="M710-140q-63 0-106.5-43.5T560-290q0-63 43.5-106.5T710-440q63 0 106.5 43.5T860-290q0 63-43.5 106.5T710-140zm0-60q38 0 64-26t26-64q0-38-26-64t-64-26q-38 0-64 26t-26 64q0 38 26 64t64 26zm-590-60v-60h360v60H120zm130-260q-63 0-106.5-43.5T100-670q0-63 43.5-106.5T250-820q63 0 106.5 43.5T400-670q0 63-43.5 106.5T250-520zm0-60q38 0 64-26t26-64q0-38-26-64t-64-26q-38 0-64 26t-26 64q0 38 26 64t64 26zm230-60v-60h360v60H480zm230 350zM250-670z" />
    </Svg>
  )
}

export default AboutIcon