import { CSSProperties, FC, useContext } from "react"
import { NavLink } from 'react-router-dom'
import { Button } from '@mui/material'
import { colors } from '../../data/colors'
import { Product } from '../../data/productlist' 
import { fontFamily, styleBtn } from "../../css/common"
import { CartContext } from "../context/cart-provider"
import * as React from 'react'
import Snackbar from '@mui/material/Snackbar'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'

interface Props {
  product: Product
}

const ProductCard: FC<Props> = (props) => {

    const [open, setOpen] = React.useState(false);
  
    const handleClick = () => {
      setOpen(true)
    }
  
    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
      if (reason === 'clickaway') {
        return
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


  const { addProductToCart } = useContext(CartContext)

    return (
        <div style={{...fontFamily}}>
            <NavLink 
              to={`/${props.product.id}`}>
              <img style={imgStyle} src={props.product.image}/>
            </NavLink>
              
            <div style={textBox}>
                <h2 style={{...titleStyle, fontSize: "14px"}}>
                  {props.product.title}
                </h2>
                <p style={{...priceStyle, fontSize: "12px"}}>
                    {props.product.price + " " + "kr"}
                </p>
            </div>
            <div style={textBox}>
                <p style={{marginTop: "0px", color: colors.secondary, fontSize: "12px"}}>
                    {props.product.shortDesc}</p>
                <p style={{marginTop: "0px", color: colors.secondary, fontSize: "12px"}}>
                    Färg: {props.product.color}</p>
            </div>
            
            <div style={{display: "flex", justifyContent: "center"}}>

              <Button style={{...styleBtn, marginTop: "20px"}} variant="contained" 
                  onMouseOver={changeBackground}
                  onClick={() => {
                    handleClick()
                    addProductToCart(props.product)}}>Lägg i varukorgen
                  <Snackbar
                    open={open}
                    autoHideDuration={2000}
                    onClose={handleClose}
                    message="Produkten är tillagd i varukorgen"
                    action={action}
                    />
              </Button>
            </div>
        </div>
    ) 
}

export default ProductCard 


const imgStyle: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  
    width: "280px",
    height: "380px",
    objectFit: "cover",
  }

  const textBox: CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    textAlign: "center",
    paddingLeft: "10px",
    paddingRight: "10px"
  }

  const titleStyle: CSSProperties = {
    display: "inline-block", 
    fontSize: "18px"
  }

  const priceStyle: CSSProperties = {
    display: "flex",
    justifyContent: "flex-end"
 }


