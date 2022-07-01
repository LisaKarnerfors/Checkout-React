
import { CSSProperties, FC, useContext } from 'react'
import { Link } from 'react-router-dom'
import { colors } from '../data/colors'
import { fontLogo, fontFamily } from "../css/common"
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined'
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined'
import { CartContext } from "./context/cart-provider" 
import logotext from "../assets/logo/logotext.jpg"

interface Props {}

const Navmenu: FC<Props> = (props) => {

  const { getTotalQty } = useContext(CartContext)

    return (
        <div>
          <div style={{...styleNavmenu, ...fontFamily, paddingBottom: "30px"}}>
              <div>
                <Link style={{color: "black", textDecoration: "none", ...fontLogo}} to={"/"}>
                    {<img src={logotext} width="40" height="25"></img>}
                </Link>
              </div> 
              
              <div className="nav">
                <Link style={navLinks} to={"/"}>HEM</Link>
                <Link style={navLinks} to={"/product"}>{}PRODUKTER</Link>
              </div>
         
              <div> 
                <Link style={navLinks} to={"/checkout"}>
                  {<ShoppingBagOutlinedIcon/>}
                </Link> 
               
                <span style={qtyStyle}>
                  {getTotalQty()}
                </span> 

                <Link style={navLinks} to={"/checkout"}>
                  {<FacebookOutlinedIcon/>}
                </Link>
                <Link style={navLinks} to={"/checkout"}>
                  {<SubscriptionsOutlinedIcon/>}
                  </Link>
              </div>
          </div>
        </div>
    );
}


export default Navmenu


const qtyStyle: CSSProperties = {
  fontSize: "8px",
  transform: "translate(150%, -220%)",
  backgroundColor: "#044778",
  color: "white",
  borderRadius: "50%",
  zIndex: "1",
  width: "15px",
  height: "15px",
  position: "absolute",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer"
}

const navLinks: CSSProperties = {
    textDecoration: "none",
    margin: "8px",
    fontSize: "12px",
    color: colors.third,
  }
  
  
  const styleNavmenu: CSSProperties = {
    width: "100%",
    height: "70px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "flex-end",
    borderBottom: "1px solid #D0D0D0",
    marginBottom: "20px"
  }

