import { CSSProperties, FC} from "react"
import { colors } from "../data/colors"
import { fontFamily, smallImageStyle } from "../css/common"
import kort from "../assets/logos/kort.jpg"
import swish from "../assets/logos/swish.png"
import resurs from "../assets/logos/resurs.png"

interface Props {}


const Footer: FC<Props> = (props) => {

    return (
        <>
        <div> 
            <div style={{...footerStyle, ...fontFamily, paddingTop: "10px"}}>
                <img src={kort}  style={smallImageStyle}></img>
                <img src={swish} style={smallImageStyle}></img>
                <img src={resurs} style={smallImageStyle}></img>
            </div>
            <p style={{...fontFamily, color: colors.secondary, margin: "0px"}}>© 2022</p>
        </div>
        </>
    )
}

export default Footer


const footerStyle: CSSProperties = {
    borderTop: "1px solid #D0D0D0",
    display: "flex",
    justifyContent: "center"
}

