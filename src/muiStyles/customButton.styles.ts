import { MUI_BUTTON_BORDER, MUI_BUTTON_GREEN, MUI_BUTTON_WHITE } from 'utils/muiConstants.utils.';

export const muiButtonStyles = {
    greenBtn: {
        '&.MuiButton-root': {
            backgroundColor: MUI_BUTTON_GREEN,
            color: MUI_BUTTON_WHITE,
            border: MUI_BUTTON_BORDER,
        },
    },
};
