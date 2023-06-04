import { Modal } from '@mui/material';
import styles from './PlanSelection.module.scss';
import CustomButton from 'components/common/FormComponents/CustomButtonComponent/CustomButton.component';
import { planSelectionData } from './data';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { useState } from 'react';
import { authSagaActions } from 'redux/sagas/sagaActions/auth.actions';
import { useDispatch, useSelector } from 'react-redux';
import { ReduxStoreType } from 'types/store.type';
import { useNavigate, useParams } from 'react-router-dom';
import ResponseCode from 'enums/responseCode';
type Plan = {
    id: number;
    planName: string;
};

type PropTypes = {
    open: boolean;
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    devices: number;
    subscriptionState: string;
    customisedHeader: boolean;
    unlimitedAccessHeader: boolean;
};

const ModalContainer = ({
    open,
    setModalOpen,
    setIsOpen,
    devices,
    subscriptionState,
    customisedHeader,
    unlimitedAccessHeader,
}: PropTypes): JSX.Element => {
    const [selectedPlans, setSelectedPlans] = useState<Plan[]>([]);
    // as of now i maintained seperate state for list of all plans later based on response data needs to read it from useSelector
    const state = useSelector((state: ReduxStoreType) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { step } = useParams();

    const handleClose = (): void => {
        setModalOpen(false);
        setSelectedPlans([]);
    };

    const handleConfirm = (): void => {
        // regarding 2000 devices ??
        if (selectedPlans.length === 0) {
            return;
        }
        if (devices >= 2000 && (customisedHeader || unlimitedAccessHeader)) {
            setIsOpen(true);
        } else {
            dispatch({
                type: authSagaActions.SELECT_PLAN_PRODUCTS,
                planId: state.userDetails.planId,
                // here devices and subscription state which i maintained localy not in redux
                payload: {
                    devices,
                    subscriptionState,
                    planId: selectedPlans.map((ele) => ele.id),
                },
            });
            // need to change it later
            if (state.respCode !== ResponseCode.Success) {
                if (step == '0') {
                    navigate('/plan-selection/1');
                }
            }
        }

        // need to trigger post api and pass payload like selected paln id devices montly or anually
    };
    const handleSelectPlans = (planName: Plan): void => {
        if (selectedPlans.includes(planName)) {
            setSelectedPlans(selectedPlans.filter((ele) => ele !== planName));
        } else {
            setSelectedPlans([...selectedPlans, planName]);
        }
    };
    const customisedPlans = (): any => {
        return planSelectionData.map((ele, i): any => {
            return (
                <button
                    key={i}
                    onClick={(): void => {
                        handleSelectPlans(ele);
                    }}
                    className={selectedPlans.includes(ele) ? styles.selected : styles.notSelected}
                >
                    {selectedPlans.includes(ele) ? <TaskAltIcon /> : ''}

                    {ele.planName}
                </button>
            );
        });
    };
    return (
        <Modal open={open} className={styles.modalContainer}>
            <div className={styles.mainModal}>
                <h2 className={styles.modalTitle}>Choose the apps that you want</h2>
                <div className={styles.customisedPlans}>{customisedPlans()}</div>

                <div className={styles.modalButtons}>
                    <CustomButton
                        onClick={handleClose}
                        buttonText="Cancel"
                        fullWidth
                        variant="outlined"
                        from="cancel"
                    />
                    <CustomButton
                        onClick={handleConfirm}
                        buttonText="Confirm"
                        fullWidth
                        variant="contained"
                        from="productFooter"
                    />
                </div>
            </div>
        </Modal>
    );
};

export default ModalContainer;
