import { FC, useContext } from "react"
import { Grid, Button } from '@mui/material'
import { TextField } from 'formik-mui'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'
import FormLabel from '@mui/material/FormLabel'
import {styleBtn} from "../../css/common"
import { PaymentContext } from "../context/payment-provider"


interface Props {}

export interface PaymentCardData {
    cardnumber: string,
    month: string,
    year: string,
    CVC: string,
    fullname: string,
  }
  
  export const DefaultPaymentCard: PaymentCardData = {
    cardnumber: "",
    month: "",
    year: "",
    CVC: "",
    fullname: "",
  }

  /* Hitta ett valideringsätt som endast accepterar nummer */
  
  const PaymentSchema = Yup.object().shape({
       cardnumber: Yup.string()
         .min(16, 'Kortnumret måste innehålla 16 nummer')
         .max(16, 'Kortnumret måste innehålla 16 nummer')
         .required('Vänligen fyll i fältet')
         .matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, "Accepterar endast nummer") 
         .test((cardnumber => String(cardnumber).length <= 16)) ,
       fullname: Yup.string()
         .min(2, 'Vänligen fyll i fältet')
         .max(50, 'Vänligen fyll i fältet')
         .required('Vänligen fyll i fältet')
         .typeError('Accepterar endast bokstäver')
         .matches(/^[aA-öÖ\s]+$/, "Accepterar endast bokstäver"),  
        month: Yup.string()
         .min(2, 'Månad måste innehålla 2 nummer')
         .max(2, 'Månad måste innehålla 2 nummer')
         .required('Vänligen fyll i fältet')
         .matches(/^(0[1-9]|1[012])$/, "Oglitig månad") 
         .test((month => String(month).length <= 2)), 
       year: Yup.string()
         .min(2, 'År måste innehålla 2 nummer')
         .max(2, 'År måste innehålla 2 nummer')
         .required('Vänligen fyll i fältet')
          .matches(/^\d+$/, "Accepterar endast nummer")  
         .test((year => String(year).length <= 2)),
        CVC: Yup.string()
         .min(3, 'CVC måste innehålla 3 nummer')
         .max(3, 'CVC måste innehålla 3 nummer')
         .required('Vänligen fyll i fältet')
         .matches(/^\d+$/, "Accepterar endast nummer") 
         .test((CVC => String(CVC).length <= 3)),
     })


const PaymentCard: FC<Props> = (props) => {

     const { setCardState } = useContext(PaymentContext) 

    return (
    
<Formik
    initialValues = {{
       cardnumber: '', 
       month: '', 
       year: '', 
       CVC: '',
       fullname: '', 
     }}

    validationSchema={PaymentSchema}
    onSubmit={values => { 
      setCardState(values as PaymentCardData)      
    }}
    >

{({ errors, touched }) => (   
  <Form>
    <FormLabel id="demo-radio-buttons-group-label">Kortbetalning</FormLabel>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Field
            component={TextField}
            name='cardnumber'
            label='Kortnummer' 
            placeholder='1234567890123456'
            fullWidth
            {...errors.cardnumber && touched.cardnumber ? (
              <div>{errors.cardnumber}</div>
              ) : null}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            component={TextField}
            name='month' 
            fluid 
            options= 'monthOption' 
            label='MM' 
            placeholder='MM'
            fullWidth
            {...errors.month && touched.month ? (
              <div>{errors.month}</div>
              ) : null}
          />
        </Grid>
        <Grid item xs={12}sm={6}>
          <Field
            component={TextField}
            name='year' 
            fluid 
            options='yearOptions' 
            label='År' 
            placeholder='ÅR'
            fullWidth
            {...errors.year && touched.year ? (
              <div>{errors.year}</div>
              ) : null}
          />
          </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            component={TextField}
            name='CVC'
            label='CVC' 
            placeholder='123'
            fullWidth
            {...errors.CVC && touched.CVC ? (
              <div>{errors.CVC}</div>
              ) : null}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            component={TextField}
            name='fullname'
            label='Korthavare' 
            placeholder='Förnamn och Efternamn'
            fullWidth
            {...errors.fullname && touched.fullname ? (
              <div>{errors.fullname}</div>
              ) : null}
          />
        </Grid>
      </Grid>
      <Button style={{...styleBtn, marginTop: "20px", marginBottom: "20px"}} type="submit" variant="contained">
          Spara
        </Button>
    </Form>             
  )}
</Formik>

    )
}

export default PaymentCard


