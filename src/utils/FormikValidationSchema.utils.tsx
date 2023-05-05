import * as Yup from 'yup';
const nameSchema = Yup.string().matches(/^[a-z A-Z]+$/, 'Name should contain only alphabets');
const emailSchema = Yup.string().matches(
    /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    'Invalid email address',
);
const mobileSchema = Yup.string().matches(/^(\+?\d{1,4}[\s-])?(?!0+\s+,?$)\d{10}\s*,?$/, 'Invalid mobile number');
const passwordSchema = Yup.string().min(8, 'Password should be at least 8 characters long');

export const validationSchema = Yup.object({
    name: nameSchema.required('Name is required'),
    email: emailSchema.required('Email is required'),
    phoneNumber: mobileSchema.required('Mobile number is required'),
    password: passwordSchema.required('Password is required'),
    companyName: Yup.string().required('company name is required'),
});

export const forgotPwdValidation = Yup.object({
    email: emailSchema.required('Email is required'),
});

export const changePwdValidation = Yup.object({
    newPwd: passwordSchema.required('Password is required'),
    confirmPwd: passwordSchema.required('Password is required'),
});
