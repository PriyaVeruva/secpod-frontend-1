import ProductSelectionComponent from 'components/ProductSelectionComponent/ProductSelectionComponent';
import StepperComponent from 'components/common/Stepper/StepperComponent';
import styles from './Profile.module.scss';
import CustomButton from 'components/common/FormComponents/CustomButtonComponent/CustomButton.component';
import ProfileDetailsFormik from './ProfileDetailsFormik';
import { Formik, Form } from 'formik';
import { profilePageValidation } from 'utils/FormikValidationSchema.utils';
import { useDispatch, useSelector } from 'react-redux';
import { ReduxStoreType } from 'types/store.type';
import CompanyDetailsFormik from './CompanyDetailsFormik';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import defaultImage from '../../../assets/images/defaultImage.png';
import { authSagaActions } from 'redux/sagas/sagaActions/auth.actions';

type ProfileDetails = {
    name: string;
    phoneNumber: string;
    email: string;
    companyName: string;
    role: Array<string>;
    companyLocation: string;
    companyEmail: string;
    companyPhoneNumber: string;
};

function ProfileContainer(): JSX.Element {
    const [open, setOpen] = useState(false);
    const [selectedPicture, setSelectedPicture] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const state = useSelector((store: ReduxStoreType) => store.user);

    const initialValues: ProfileDetails = {
        name: state.userDetails.name || '',
        email: state.userDetails.email || '',
        phoneNumber: state.userDetails.phoneNumber || '',
        companyName: state.userDetails.companyName || '',
        role: state.userDetails.roles || [],
        companyLocation: '',
        companyEmail: '',
        companyPhoneNumber: '',
    };
    const [values, setValues] = useState(initialValues);
    const [disable, setDisabled] = useState(true);
    const [validationErrors, setValidationErrors] = useState({});

    useEffect(() => {
        const hasValidationErrors = Object.values(validationErrors).some((error) => !!error);

        if (
            (values.name &&
                values.email &&
                values.phoneNumber &&
                values.companyEmail &&
                values.companyLocation &&
                values.companyName &&
                values.companyPhoneNumber) !== '' &&
            !hasValidationErrors
        ) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [values, validationErrors]);

    const handleInputChange = (e: any): void => {
        const name = e.target.name;
        const value = e.target.value;

        setValues({ ...values, [name]: value });

        // Update validationErrors based on validation schema
        profilePageValidation
            .validateAt(name, { [name]: value })
            .then(() => {
                setValidationErrors((prevErrors) => ({
                    ...prevErrors,
                    [name]: undefined,
                }));
            })
            .catch((error) => {
                setValidationErrors((prevErrors) => ({
                    ...prevErrors,
                    [name]: error.message,
                }));
            });
    };

    const handlePictureChange = (event: any): void => {
        setSelectedPicture(event.target.files[0]);
    };
    const handleRemove = (): void => {
        setSelectedPicture(null);
    };
    const handleAddMoreFields = (): void => {
        setOpen(!open);
    };
    const handleBack = (): void => {
        const devices = state.userDetails.devices;
        if (parseInt(devices) >= 2000) {
            navigate('/plan-selection/0');
        } else {
            navigate('/plan-selection/1');
        }
    };

    const handleContinue = (): void => {
        dispatch({
            type: authSagaActions.UPDATE_PROFILE,
            payload: values,
        });
    };
    return (
        <ProductSelectionComponent>
            <div className={styles.stepper}>
                <StepperComponent />
            </div>
            <div className={styles.profileContainer}>
                <div className={styles.profileDetails}>
                    <div className={styles.profileContentSection}>
                        <h2>Profile Details</h2>
                        <div className={styles.imageSection}>
                            <img src={selectedPicture ? URL.createObjectURL(selectedPicture) : defaultImage} alt="" />

                            <label htmlFor="profilePictureInput" className={styles.uploadLink}>
                                Upload Profile Picture
                                <input
                                    id="profilePictureInput"
                                    type="file"
                                    accept="image/*"
                                    onChange={handlePictureChange}
                                    className={styles.fileInput}
                                />
                            </label>
                            <div onClick={handleRemove} className={styles.removeImage}>
                                Remove
                            </div>
                        </div>
                        <Formik
                            initialValues={initialValues}
                            onSubmit={(): void => {
                                ('');
                            }}
                            validationSchema={profilePageValidation}
                        >
                            <Form onChange={handleInputChange}>
                                <ProfileDetailsFormik />
                            </Form>
                        </Formik>
                    </div>
                </div>
                <div className={styles.companyDetails}>
                    <h2>Company Details</h2>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={(): void => {
                            ('');
                        }}
                        validationSchema={profilePageValidation}
                    >
                        <Form onChange={handleInputChange}>
                            <CompanyDetailsFormik />
                        </Form>
                    </Formik>
                    <div className={styles.pointOfContact}>
                        {open && (
                            <>
                                <h2>Point of Contact</h2>
                                <Formik
                                    initialValues={initialValues}
                                    onSubmit={(): void => {
                                        ('');
                                    }}
                                    validationSchema={profilePageValidation}
                                >
                                    <Form onChange={handleInputChange}>
                                        <ProfileDetailsFormik />
                                    </Form>
                                </Formik>
                            </>
                        )}
                        <div className={styles.addMoreBtn}>
                            <CustomButton
                                buttonText={'Add more +'}
                                variant="contained"
                                from={'addMoreBtn'}
                                onClick={handleAddMoreFields}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.profileButtons}>
                <CustomButton buttonText={'BACK'} variant="outlined" from="backButton" onClick={handleBack} />
                <CustomButton
                    buttonText={'CONTINUE'}
                    variant="contained"
                    from="continue"
                    onClick={handleContinue}
                    disabled={disable}
                />
            </div>
        </ProductSelectionComponent>
    );
}

export default ProfileContainer;
