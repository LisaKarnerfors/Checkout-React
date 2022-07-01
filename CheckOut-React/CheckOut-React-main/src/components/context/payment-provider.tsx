import { FC, useState, PropsWithChildren } from "react"
import { Payment } from "../../data/paymentList"
import React from "react"    
import { PaymentCardData } from "../checkout-logic/payment-card"
import { Swish } from "../checkout-logic/swish"
import { Resurs } from "../checkout-logic/resurs"

interface Props{}

export interface OptionPaymentData {
  paymentOptionState: Payment | undefined,
  swishState: Swish | undefined,
  resursState: Resurs | undefined,
  cardState: PaymentCardData | undefined,
  setPaymentOption: React.Dispatch<React.SetStateAction<Payment | undefined>> 
  setSwish: React.Dispatch<React.SetStateAction<Swish | undefined>>,
  setResurs: React.Dispatch<React.SetStateAction<Resurs | undefined>>,
  setCardState: React.Dispatch<React.SetStateAction<PaymentCardData | undefined>>,
}

const DefaultOptionPaymentData: OptionPaymentData = {
  paymentOptionState: undefined,
  swishState: undefined,
  resursState: undefined,
  cardState: undefined,
  setPaymentOption: () => {},
  setSwish: () => {},
  setResurs: () => {},
  setCardState: () => {},
}


export const PaymentContext = React.createContext<OptionPaymentData>(DefaultOptionPaymentData)


const PaymentProvider: FC<PropsWithChildren<Props>> = (props) => {

    const [paymentOptionState, setPaymentOption] = useState<Payment | undefined>()
    const [ swishState, setSwish ] = useState<Swish | undefined>()
    const [ resursState, setResurs ] = useState<Resurs | undefined>()
    const [ cardState, setCardState] = useState<PaymentCardData | undefined>() 

    return (
        <PaymentContext.Provider 
            value={{paymentOptionState, setPaymentOption, swishState, setSwish, resursState, setResurs, cardState, setCardState,}}> 
                {props.children}
        </PaymentContext.Provider>

    ) 
}
  

export default PaymentProvider