import { MUI_LABEL_ERROR, MUI_LABEL_FOCUSED } from 'utils/muiConstants.utils';

export const muiTextFieldStyles = {
    default: {
        '& .MuiInputLabel-root': {
            lineHeight: '1',
        },

        '& .MuiTextField-root': {
            margin: '50px',
        },

        '& .MuiFormLabel-root.MuiInputLabel-root': {
            fontSize: '20px',
        },

        '& .MuiFormLabel-root.MuiInputLabel-root.Mui-focused': {
            color: MUI_LABEL_FOCUSED,
        },

        '& .MuiFormLabel-root.MuiInputLabel-root.Mui-error': {
            color: MUI_LABEL_ERROR,
        },

        '& .Mui-error': {
            color: MUI_LABEL_ERROR,
        },

        '& .MuiFormHelperText-root': {
            fontFamily: 'Futura-Medium',
            color: MUI_LABEL_ERROR,
            marginLeft : '0'
        },

        '& .MuiFormHelperText-root.Mui-error': {
            fontFamily: 'Futura-Medium',
            color: MUI_LABEL_ERROR,
        },
    },
};
