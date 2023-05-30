import CustomButton from 'components/common/FormComponents/CustomButtonComponent/CustomButton.component';
import styles from './PlanSelection.module.scss';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReduxStoreType } from 'types/store.type';
import { authSagaActions } from 'redux/sagas/sagaActions/auth.actions';
import ResponseCode from 'enums/responseCode';
import { useNavigate, useParams } from 'react-router-dom';
import ModalContainer from './CustomisedPlansModal';
import { text } from 'utils/text.utils';
import ConfirmationDialog from 'components/common/2000DevicesPopUp/ConfirmationDialog';
interface planSelectionCardProps {
    heading: string;
    subHeading: Array<string>;
    featuresText: string;
    id: number;
    features: Array<string>;
    devices: number;
    subscriptionState: any;
}
function PlanSectionCards({
    heading,
    subHeading,
    featuresText,
    features,
    id,
    devices,
    subscriptionState,
}: planSelectionCardProps): JSX.Element {
    const { step } = useParams();
    const [isHovered, setIsHovered] = useState(null);
    const [modalOpen, setModalOpen] = useState<boolean>(false); //customised plans state
    const [isOpen, setIsOpen] = useState<boolean>(false); //2000 devices state

    const navigate = useNavigate();
    const state = useSelector((state: ReduxStoreType) => state.user);
    const dispatch = useDispatch();

    const handleMouseEnter = (id: any): void => {
        setIsHovered(id);
    };
    const handleMouseLeave = (): void => {
        setIsHovered(null);
    };
    // once user clicks on plans cards needs to trigger post api where needs to pass plans id

    function closeConfiramtionDialog(): void {
        dispatch({
            type: authSagaActions.SELECT_PLAN_PRODUCTS,
            planId: state.userDetails.planId,
            // here devices and subscription state which i maintained localy not in redux
            payload: {
                devices,
                subscriptionState,
                planId: state.userDetails.planId,
            },
        });
        // need to chnage
        if (state.respCode !== ResponseCode.Success) {
            if (step == '0') {
                navigate('/plan-selection/2');
            }
        }
        setIsOpen(false);
    }

    function handleMoreThan2000Devices(): JSX.Element {
        return (
            <ConfirmationDialog
                title={text.moreThan2000Devices.HEADER_CONTENT}
                content={text.moreThan2000Devices.PARAGRAPH_CONTENT}
                isOpen={isOpen}
                onClose={closeConfiramtionDialog}
                buttonText={text.moreThan2000Devices.BUTTON_CONTENT}
                subContent={text.moreThan2000Devices.SUB_PARAGRAPH_CONTENT}
            />
        );
    }

    const handlePlanSelect = (): void => {
        // after choosing either 5 or 6 cards then pop up will come their clicking on confirm post api will trigger and navigates to billing
        if (devices < 2000 && (id === 5 || id === 6)) {
            setModalOpen(!modalOpen);
        }
        if (devices >= 2000 && !(id === 5 || id === 6)) {
            setIsOpen(true);
        }
        if (devices >= 2000 && (id === 5 || id === 6)) {
            setModalOpen(!modalOpen);
        }

        if (id !== 5 && id !== 6 && devices !== 0 && devices < 2000) {
            dispatch({
                type: authSagaActions.SELECT_PLAN_PRODUCTS,
                planId: state.userDetails.planId,
                // here devices and subscription state which i maintained localy not in redux
                payload: {
                    devices,
                    subscriptionState,
                    planId: state.userDetails.planId,
                },
            });
            if (state.respCode !== ResponseCode.Success) {
                if (step == '0') {
                    navigate('/plan-selection/1');
                }
            }
        }
    };
    // as of now readign mock data once api triggers we get response Data here need to read data from getProducts using useSelector
    return (
        <>
            <div className={styles.cardContents}>
                <div className={'sanerNowCardContentsSection'}>
                    <div className={heading.toLowerCase().includes('advanced') ? 'ribbon' : ' '}>
                        <section>
                            <span className={heading.toLowerCase().includes('advanced') ? 'ribbon3' : ''}>
                                {heading.toLowerCase().includes('advanced') ? 'Most Popular' : ''}
                            </span>
                        </section>
                    </div>
                    <div className={'heading'} style={{ color: '#10171d', fontSize: '20px' }}>
                        {heading}
                    </div>

                    <div
                        className={
                            heading.toLowerCase().includes('advanced') || heading.toLowerCase().includes('unlimited')
                                ? 'card2SubContents'
                                : 'subContents'
                        }
                    >
                        {subHeading.map((ele, i) => {
                            return (
                                <div key={i} className={'subHeadings'}>
                                    <span>{ele}</span>
                                </div>
                            );
                        })}
                    </div>
                    <div className={'featuresText'}>{featuresText}</div>
                    <div className="features">
                        {features.map((ele, i) => {
                            return (
                                <div className={'contents'} key={i}>
                                    <div className={'circleWithTick'}></div>
                                    <span>{ele}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div
                    onMouseEnter={(): void => handleMouseEnter(id)}
                    onMouseLeave={(): void => handleMouseLeave()}
                    className={styles.selectButton}
                >
                    <CustomButton
                        variant={isHovered === id ? 'contained' : 'outlined'}
                        type="submit"
                        fullWidth={true}
                        buttonText={'Select'}
                        from={'productFooter'}
                        icons={true}
                        onClick={handlePlanSelect}
                    />
                </div>
            </div>
            <ModalContainer
                open={modalOpen}
                setModalOpen={setModalOpen}
                setIsOpen={setIsOpen}
                devices={devices}
                id={id}
                subscriptionState={subscriptionState}
            />

            {isOpen && handleMoreThan2000Devices()}
        </>
    );
}

export default PlanSectionCards;
