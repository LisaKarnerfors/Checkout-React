import * as React from 'react'
import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import StepContent from '@mui/material/StepContent'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { useContext } from "react"
import { CartContext } from "./context/cart-provider"
import DefaultFormList from "./checkout-logic/customer-form"
import ShippingCard from "./checkout-logic/shipping"
import PaymentOptionCard from "./checkout-logic/payments"
import { styleBtn, fontFamily } from "../css/common"
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { PaymentContext } from "../components/context/payment-provider"
import { ShippingContext } from "../components/context/shipping-provider"
import Alert from '@mui/material/Alert';


const steps = [
  {
    label: 'Kunduppgifter',
    description: <DefaultFormList/>
  },
  {
    label: 'Fraktsätt',
    description:
    <ShippingCard/>
  },
  {
    label: 'Betalsätt',
    description: <PaymentOptionCard/>
  },
]


function Steppers() {

  const { itemInCart, getTotalOrder, getTotalPrice, totalShipping, totalPayment, confirmOrder, infoOfCustomer } = useContext(CartContext)
  const { paymentOptionState } = useContext(PaymentContext)
  const { shippingState } = useContext(ShippingContext)

  
  const [activeStep, setActiveStep] = React.useState(0)
  const [open, setOpen] = React.useState(false);
  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

function changeBackground(e) { 
    e.target.style.background = "#044778";
} 

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div style={{display: "flex", justifyContent: "center", paddingBottom: "20px"}}>
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 2 ? (
                  <Typography variant="caption"></Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button style={{...styleBtn}}
                    type="submit"
                      onMouseOver={changeBackground} variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 1, mr: 1 }}
                    >
                    {index === steps.length - 1 ? 'Fortsätt till betalning' : 'Fortsätt'}
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (

        <Paper square elevation={0} sx={{ p: 3 }}>
             {itemInCart.length == 0 ? null : 
                 <>
                 <h2>Totalsumma order</h2>
                <div style={{ ...fontFamily, borderTop: "1px solid #D0D0D0", borderBottom: "1px solid #D0D0D0"}}>
                    <p>Produkter: {getTotalPrice()} kr</p>
                    <p>Leverans: {totalShipping()} kr</p>
                    <p>Betalning: {totalPayment()} kr</p>
                
                    <div>
                        <h3>Totalt: {getTotalOrder()} kr</h3>
                    </div>
                </div>

                <div>
                  { infoOfCustomer && shippingState && paymentOptionState ? <Button style={{...styleBtn, marginTop: "40px"}}       
                      variant="outlined" type="submit" 
                          onMouseOver={changeBackground} 
                          onClick={handleClickOpen}>
                          Slutför köp 
                    </Button> : 
                    <><br></br>
                      <Alert 
                        severity="warning">Var vänlig och fyll i korrekt information för att slutföra ditt köp!
                      </Alert>
                    </>
                  }
                    <Dialog
                        open={open}
                          onClose={handleClose}
                          aria-labelledby="alert-dialog-title"
                          aria-describedby="alert-dialog-description"
                        >
                    <DialogTitle id="alert-dialog-title">
                        {"Tack för din beställning!"}
                    </DialogTitle>
                
                    <DialogContent>
                      <DialogContentText id="alert-dialog-description">
                          Vi hoppas du haft en trevlig köpupplevelse!
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button 
                        onClick={()=> {handleClose()
                        confirmOrder()}}>Stäng
                      </Button>   
                    </DialogActions>
                  </Dialog>
                </div>
                </>
             }           
                <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                  Tillbaka
                </Button> 
        </Paper>
      )}
    </Box>
    </div>
  );
}

export default Steppers
