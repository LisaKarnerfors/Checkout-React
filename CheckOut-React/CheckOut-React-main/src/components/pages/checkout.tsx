import { CSSProperties, FC } from 'react'
import { useContext } from "react"
import { textStyle, fontFamily, styleBtn } from "../../css/common"
import {CartContext} from "../context/cart-provider" 
import CheckoutCard from "../page-cards/checkout-card"
import { NavLink } from "react-router-dom"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import VerticalLinearStepper from "../stepper"

interface Props {}

const CheckOut: FC<Props> = (props) => {

    const { itemInCart } = useContext(CartContext)

    return (
        
    <div>
        <div> 
            <NavLink className="navLink" style={{...navigationBack, ...fontFamily}} 
                to={"/"}><ArrowBackIosIcon style={{fontSize: "1em"}}/>
                    Fortsätt handla
            </NavLink>

            <div>
                {itemInCart.length == 0 ? null : 
                    <h2 className="heading" style={{...heading, ...fontFamily}}>
                        Produkter</h2> 
                }
                <div style={{display: "flex", justifyContent: "center", alignItems: "center", ...fontFamily}}>
                    {itemInCart.length === 0 ? 
                        <h2>Din varukorg är tom</h2>  
                        : null}
                </div>
            </div>
                <div>
                    {itemInCart.map((cartItem) => 
                        <CheckoutCard cartItem={cartItem} />
                    )}
                </div>

            <div>
                {itemInCart.length === 0 ? null :
                <div style={{ ...fontFamily, borderTop: "1px solid #D0D0D0",}}>
                    <div style={textBoxItems}> 
                        <div style={{...textStyle, ...fontFamily}}>
                            <div style={{display: "flex", justifyContent: "space-between", marginTop: "40px"}}>
                               
                                <div>
                                    <VerticalLinearStepper/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                }
            </div>
            </div>
        </div>

    )
}


export default CheckOut

const navigationBack: CSSProperties = {
    color: "black", 
    textDecoration: "none",
    margin: "160px",
    fontSize: "12px"
}

const textBoxItems: CSSProperties = {
    display: "flex",
    width: "70%",
    flex: "1",
    marginLeft: "auto",
    marginRight: "auto"
}  

const heading: CSSProperties = {
    fontSize: "16px", 
    fontWeight: "lighter", 
    marginTop: "40px",
    display: "flex",
    width: "60%",
    justifyContent: "flex-start",
    marginLeft: "auto",
    marginRight: "auto"
}