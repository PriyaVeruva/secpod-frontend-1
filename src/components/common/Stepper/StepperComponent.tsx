import { Step, StepLabel, Stepper } from '@mui/material';
import { muiStepperStyles } from 'muiStyles/stepper.styles';
import { useEffect, useState } from 'react';
import styles from './Stepper.module.scss';
import { steps } from './data';
import { useParams } from 'react-router-dom';
function StepperComponent(): JSX.Element {
    const [activeStep, setActiveStep] = useState(0);
    const { step: queryStep } = useParams();

    useEffect(() => {
        if (queryStep === '1') {
            setActiveStep(activeStep + 1);
        }
        if (queryStep === '2') {
            setActiveStep(activeStep + 2);
        }
        if (queryStep === '3') {
            setActiveStep(activeStep + 3);
        }
    }, [queryStep]);
    return (
        <div className={styles.stepper}>
            <Stepper activeStep={activeStep} alternativeLabel sx={muiStepperStyles}>
                {steps.map((label, i) => {
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
