import { FC, PropsWithChildren, useState } from "react" 
import { Shipping } from "../../data/shippingList"
import React from "react"   

interface Props {}

export interface ShippingData {
    shippingState: Shipping | undefined
    setShippingState: React.Dispatch<React.SetStateAction<Shipping | undefined>>,
}

const DefaultShippingData: ShippingData = {
    shippingState: undefined,  
    setShippingState: () => {},  
}


export const ShippingContext = React.createContext<ShippingData>(DefaultShippingData)


const ShippingProvider: FC<PropsWithChildren<Props>> = (props) => {

    const [shippingState, setShippingState] = useState<Shipping | undefined>()

        return (
            <ShippingContext.Provider 
                 value={{shippingState, setShippingState}}> 
                    {props.children}
            </ShippingContext.Provider>
            )

}

export default ShippingProvider


