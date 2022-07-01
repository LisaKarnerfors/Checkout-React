import { FC, CSSProperties, useContext } from "react"
import { productList } from "../../data/productlist"
import { useParams, Navigate, NavLink } from "react-router-dom"
import { Button } from '@mui/material' 
import { fontFamily, styleBtn, textStyle } from "../../css/common"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import { CartContext } from "../context/cart-provider"
import * as React from 'react'
import Snackbar from '@mui/material/Snackbar'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'

interface Props{}


const ProductDetail: FC<Props> = (props) => {

    const [open, setOpen] = React.useState(false);
  
    const handleClick = () => {
      setOpen(true)
    }
  
    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false)
    }
  
    const action = (
      <React.Fragment>
        <Button color="secondary" size="small" onClick={handleClose}>
        </Button>
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={handleClose}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </React.Fragment>
    )


    function changeBackground(e) { 
        e.target.style.background = "#044778";
    }

    const { productId } = useParams()

        const { addProductToCart } = useContext(CartContext)

        const foundProduct = productList.find((product) => 
            Number(productId) == product.id)
    
            if(!foundProduct) {
                return <Navigate to ="/" />
            }
    
        return (
            <>
            <NavLink className="navLink" style={{...navigationBack, ...fontFamily}} 
                to={"/"}><ArrowBackIosIcon style={{fontSize: "1em"}}/>
                    Fortsätt handla
            </NavLink>
            
            <div className="product-box" style={{...floatcontainer, ...fontFamily}}>        
                <div className="imgflex" style={imgBox}>
                    <img className="img" style={imgStyle} src={foundProduct!.image} alt="" />
                </div>

                <div className="text-box" style={textBox}>
                    <h3 style={{fontSize: "14px"}}>
                        {foundProduct!.title}
                    </h3>
                    <p className="text" style={{...textStyle, paddingRight: "100px"}}>
                        {foundProduct!.desctiption}
                    </p>
                    <p style={{fontSize: "12px"}}>
                        Färg: {foundProduct!.color}
                    </p>
                    <p style={{fontSize: "12px"}}>
                        {foundProduct!.price + " " + "kr"}
                    </p> 

                    <Button style={{...styleBtn, marginTop: "50px"}} variant="contained"
                    onMouseOver={changeBackground} 
                        onClick={() =>  {
                            handleClick()
                            addProductToCart(foundProduct)}} >Lägg i varukorgen
                    </Button>         
                    <Snackbar
                        open={open}
                        autoHideDuration={2000}
                        onClose={handleClose}
                        message="Produkten är tillagd i varukorgen"
                        action={action}
                    />   
                </div>
            </div>
             </>
            ) 
        }  


export default ProductDetail


const navigationBack: CSSProperties = {
    color: "black", 
    textDecoration: "none",
    margin: "160px",
    fontSize: "12px"
}

const floatcontainer: CSSProperties = {
    display: "flex",
    marginTop: "30px",
    marginBottom: "30px"
}

const imgBox: CSSProperties = {
    flex: "1",
    marginLeft: "160px" 
}  

const textBox: CSSProperties = {
    flex: "1",
    marginRight: "50px", 
    marginTop: "30px" 
}  

const imgStyle: CSSProperties = {
    width: "300px",
    height: "400px",
    objectFit: "cover",
}