import { Step, StepLabel, Stepper } from '@mui/material';
import { muiStepperStyles } from 'muiStyles/stepper.styles';
import { useEffect, useState } from 'react';
import styles from './Stepper.module.scss';
import { steps } from './data';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ReduxStoreType } from 'types/store.type';
function StepperComponent(): JSX.Element {
    const [activeStep, setActiveStep] = useState(0);
    const { step: queryStep } = useParams();
    const devices = useSelector((state: ReduxStoreType) => state.user.userDetails.devices);
    const devicesValue = parseInt(devices, 10);
    useEffect(() => {
        if (queryStep === '1') {
            setActiveStep(1);
        }
        if (queryStep === '2' && devicesValue < 2000) {
            setActiveStep(2);
        } else if (devicesValue >= 2000 && queryStep === '2') {
            setActiveStep(1);
        }

        if (queryStep === '3') {
            setActiveStep(3);
        }
    }, [queryStep]);
    return (
        <div className={styles.stepper}>
            <Stepper activeStep={activeStep} alternativeLabel sx={muiStepperStyles}>
                {steps.map((label, i) => {
                    if (i === 1 && queryStep === '2' && devicesValue >= 2000) {
                        return null; // Return null to hide the step
                    }

                    return (
                        <Step key={i}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
        </div>
    );
}

export default StepperComponent;
