import { Field, Formik, Form } from 'formik';
import TextFieldComponent from 'components/common/FormComponents/TextFieldComponent/TextField.component';
import { validationSchema } from './BillingFormValidationSchema';
import { BillingFormFieldsData } from './data';
import styles from './Payment.module.scss';


export default function BillingForm({ handleInputChange }: any): JSX.Element {

  const formData = {
    address: '',
    city: '',
    state: '',
    country: '',
    pincode: ''
  };

  const handleSubmit = (): void => {
    console.log('hlo');
  };

  return (
    <Formik initialValues={formData} onSubmit={handleSubmit} validationSchema={validationSchema}>
      <Form className={styles.formContainer} onChange={handleInputChange} >
        {BillingFormFieldsData.map((data, i) => (
          <Field name={data.name} key={i}>
            {({ field, form: { errors, touched } }: any): any => {
              return (
                <TextFieldComponent
                  type={data.type}
                  name={data.name}
                  label={data.label}
                  field={field}
                  form={{
                    errors,
                    touched,
                  }}
                />
              );
            }}
          </Field>
        ))}
      </Form>
    </Formik>
  );
}
