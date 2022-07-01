
import { FC } from "react"
import Navmenu from "./navmenu"
import Footer from "./footer"
import Content from "./content"
import CartProvider from "./context/cart-provider" 
import Banner from "./banner"
import ShippingProvider from "./context/shipping-provider"
import PaymentProvider from "./context/payment-provider"


const Layout: FC = () => {
    return (
        <div>
            <PaymentProvider>
                <ShippingProvider>  
                    <CartProvider>
                        <Banner/>
                        <Navmenu/>
                        <Content/>
                        <Footer/>
                    </CartProvider>
                </ShippingProvider> 
            </PaymentProvider>
        </div>
    )
}           

export default Layout
