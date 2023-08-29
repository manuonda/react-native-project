import * as React from "react"
import Svg, { Path , SvgProps} from "react-native-svg"

const  Search = ({color,width,height,style}:SvgProps)  => {
  return (
    <Svg
      style={style}
      height={height}
      viewBox="0 -960 960 960"
      width={width}
       fill={color}
    >
      <Path d="M796-121L533-384q-30 26-69.959 40.5T378-329q-108.162 0-183.081-75Q120-479 120-585t75-181q75-75 181.5-75t181 75Q632-691 632-584.85 632-542 618-502q-14 40-42 75l264 262-44 44zM377-389q81.25 0 138.125-57.5T572-585q0-81-56.875-138.5T377-781q-82.083 0-139.542 57.5Q180-666 180-585t57.458 138.5Q294.917-389 377-389z" />
    </Svg>
  )
}

export default Search;