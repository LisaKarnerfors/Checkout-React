import { useContext } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup'
import { CartContext } from '../context/cart-provider';
import { Grid, Button } from '@mui/material'
import { TextField } from 'formik-mui'
import { styleBtn } from "../../css/common"
import { PaymentContext } from "../context/payment-provider"

export interface Swish {
    phone: string
}

export const DefaultSwish: Swish = {
    phone: ""
}

const SwishSchema = Yup.object().shape({
    phone: Yup.string()
      .min(10, 'Telefonnumret måste innehålla 10 nummer')
      .max(10, 'Telefonnumret måste innehålla 10 nummer') 
      .required('Vänligen fyll i fältet')
      .matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, "Accepterar endast nummer") 
      .test((phone => String(phone).length <= 10)),
  })

  
const Swish = () => {

    const { setSwish } = useContext(PaymentContext)

    return (
    <div>
    
      <Formik
        initialValues={{
            phone: '',
        }}

        validationSchema={SwishSchema}
        onSubmit={values => {
            setSwish(values as Swish)
        }}
      >

        {({ errors, touched }) => (
             <>
            <Form>
            <Grid>
             <Grid item xs={12} sm={6}>
             <Field
               component={TextField}
               label="Telefonnummer*"
               name="phone"
               variant="outlined"
               placeholder='070XXXXXXX'
               fullWidth
               {...errors.phone && touched.phone ? (
                <div>{errors.phone}</div>
                ) : null}
             />
           </Grid> 
           </Grid>
           <Button style={{...styleBtn, marginTop: "20px", marginBottom: "20px"}} type="submit" variant="contained">
            Spara
            </Button>
           </Form>
           </>
        )}
      </Formik>
    </div>
  )
}

export default Swish