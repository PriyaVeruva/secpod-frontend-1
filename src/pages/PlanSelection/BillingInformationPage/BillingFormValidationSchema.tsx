import * as Yup from 'yup';
const addressSchema = Yup.string().matches(/^[a-z A-Z]+$/, 'Invalid Address');
const citySchema = Yup.string().matches(/^[a-z A-Z]+$/, 'Invalid City');
const stateSchema = Yup.string().matches(/^[a-z A-Z]+$/, 'Invalid State');
const countrySchema = Yup.string().matches(/^[a-z A-Z]+$/, 'Invalid Country');
const pincodeSchema = Yup.string().min(6, 'Invalid Pincode');

export const validationSchema = Yup.object({
    address: addressSchema.required('Address is required'),
    city: citySchema.required('City is required'),
    state: stateSchema.required('State number is required'),
    country: countrySchema.required('Country is required'),
    pincode: pincodeSchema.required('Pincode is required'),
});