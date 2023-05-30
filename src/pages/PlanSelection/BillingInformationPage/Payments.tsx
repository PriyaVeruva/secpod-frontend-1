import { useState } from 'react';
import DoneIcon from '@mui/icons-material/Done';
import TextFieldComponent from 'components/common/FormComponents/TextFieldComponent/TextField.component';
import BillingForm from './BillingForm';
import styles from './Payment.module.scss';
import { initialPaymentModeDetailData, initialPaymentModesData, pointsData, typeInitialPaymentObj } from './data';
import { Field, Formik, Form } from 'formik';
import { validationSchema } from './BillingFormValidationSchema';
import { Link } from 'react-router-dom';

export default function Payments(): JSX.Element {

  const [paymentModesData, setPaymentModesData] = useState(initialPaymentModesData);
  const [payemntMode, setPayemntMode] = useState('');
  const [paymentDetailsData, setPaymentDetailsData] = useState(initialPaymentModeDetailData);
  const [values, setValues] = useState({});

  const handleSubmit = (): void => {
    console.log('Values ------>\n', values);
  };

  const setPaymentModeResult = (result: string[]): void => {
    let temp = [];
    temp = initialPaymentModeDetailData.map((data, i) => {
      return {
        head: data.head,
        data: result[i]
      };
    });
    setPaymentDetailsData(temp);
  };

  const handleChangePaymentMode = (selectedObj: typeInitialPaymentObj): void => {
    const temp = paymentModesData.map(data => {
      if (data.name === selectedObj.name) {
        data.active = true;
        setPayemntMode(data.name);
        const result = ['SanerNow', '50000005148972', 'HDFC0004094', 'HSR LAYOUT III BENGALURU', 'SAVING', '888888888@hdfcbank'];
        setPaymentModeResult(result);
        return data;
      }
      data.active = false;
      return data;
    });
    setPaymentModesData(temp);
  };

  const handleInputChange = (e: any): void => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.heading}>Almost there, congratulations</div>
      <div className={styles.paymentContainer}>
        <div className={styles.paymentForm}>
          <div className={styles.section}>
            <div className={styles.formHeading}>
              Billing Information
            </div>
            <div className={styles.billingForm}>
              <BillingForm handleInputChange={handleInputChange} />
            </div>
          </div>
          <div className={styles.section}>
            <div className={styles.formHeading}>
              Mode Of Payment
            </div>
            <div className={styles.paymentModes}>
              {paymentModesData.map((data, i) => (
                <div className={`${styles.mode} ${data.active && styles.active123 || ''}`} key={i} onClick={(): void => handleChangePaymentMode(data)}>
                  <div className={styles.circle}></div>
                  <div className={styles.text}>{data.name}</div>
                </div>
              ))}
            </div>
            {payemntMode && (<div className={styles.paymentModeDetail}>
              <div className={styles.head}>{payemntMode} Details</div>
              <div className={styles.detailsContainer}>
                {paymentDetailsData?.map((data, i) =>
                  <div className={styles.details} key={i}>
                    <div className={styles.head}>{data.head}</div>
                    <div className={styles.data}>{data.data}</div>
                  </div>
                )}
                <div className={styles.details}>
                  <div className={styles.head}>Once payment is cleared please share the reciept at</div>
                  <div className={styles.data}>finance@secpod.com</div>
                </div>
              </div>
            </div>
            )}
          </div>
          <div className={styles.section}>
            <div className={styles.formHeading}>
              Have coupon code?
            </div>
            <div className={styles.couponInput}>
              <Formik initialValues={{ couponCode: '' }} onSubmit={handleSubmit} validationSchema={validationSchema}>
                <Form className={styles.formContainer} onChange={handleInputChange} >
                  <Field name={'couponCode'}>
                    {({ field, form: { errors, touched } }: any): any => {
                      return (
                        <TextFieldComponent
                          type={'text'}
                          name={'couponCode'}
                          label={'Apply Coupon Code'}
                          field={field}
                          form={{
                            errors,
                            touched,
                          }}
                        />
                      );
                    }}
                  </Field>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
        <div className={styles.paymentDetail}>
          <div className={styles.section1}>
            <div>
              <div className={styles.paymentLabel}>You have to pay</div>
              <div className={styles.paymentAmount}>$730.00</div>
            </div>
            <div className={styles.upgradePlanCont}>
              <div className={styles.text}>Visualize & Normalize</div>
              <div className={styles.link}>Upgrade Plan</div>
            </div>
          </div>
          <div className={styles.section2}>
            {pointsData?.map((text, i) =>
              <div className={styles.points} key={i}>
                <div className={styles.check}><DoneIcon /></div>
                <div className={styles.text}>{text}</div>
              </div>)
            }
          </div>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <Link to='/plan-selection/0'><div className={styles.backBtn}>BACK</div></Link>
        <div className={styles.payNowBtn} onClick={handleSubmit}>PAY NOW</div>
      </div>
    </div>
  );
}