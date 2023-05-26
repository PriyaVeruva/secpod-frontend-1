import {
    MUI_STEP_ICON_COLOR,
    MUI_STEP_ICON_ACTIVE_BORDER_COLOR,
    MUI_STEP_ICON_DISABLED_BORDER_COLOR,
    PRIMARY_COLOR,
    STEP_LABEL_TEXT_COLOR,
    STEP_CONNECTOR_BORDER_COLOR,
} from '../utils/muiConstants.utils';
export const muiStepperStyles = {
    '&  .MuiStepIcon-root': {
        width: '39px !important',
        height: '39px !important',
        color: MUI_STEP_ICON_COLOR,
        borderRadius: '100%',
    },

    '& .Mui-active  .MuiStepIcon-root': {
        border: MUI_STEP_ICON_ACTIVE_BORDER_COLOR,
    },
    '& .Mui-disabled .MuiStepIcon-root': {
        border: MUI_STEP_ICON_DISABLED_BORDER_COLOR,
    },
    '& .Mui-completed': {
        color: PRIMARY_COLOR,
        border: 'none',
    },
    '& .MuiStepIcon-text  ': {
        fill: STEP_LABEL_TEXT_COLOR,
        fontWeight: '600 !important',
        fontFamily: 'work-sans-semibold sans-serif !important',
    },

    '&  .MuiStepConnector-root ': {
        top: '18px !important',
    },
    '&   .MuiStepConnector-line': {
        borderTopStyle: 'dashed !important',
        borderColor: STEP_CONNECTOR_BORDER_COLOR,
    },

    '&  .Mui-completed .MuiStepConnector-line, .Mui-active .MuiStepConnector-line': {
        borderTopStyle: 'solid !important',
        borderColor: STEP_CONNECTOR_BORDER_COLOR,
        borderWidth: '2px',
    },

    '&  .MuiStepLabel-label': {
        color: STEP_LABEL_TEXT_COLOR,
        fontSize: '24px !important',
        letterSpacing: 'normal !important',
    },

    '& .MuiStepLabel-label.Mui-active,  .MuiStepLabel-label.Mui-completed': {
        color: PRIMARY_COLOR,
    },
};
