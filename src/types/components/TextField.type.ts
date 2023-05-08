export interface TextFieldInputProps {
    type: string;
    name: string;
    label: string;
    field: {
        name: string;
    };
    form: {
        touched: { [key: string]: boolean };
        errors: { [key: string]: string };
    };
    endAdornment?: string | React.ReactNode;
    InputProps?: {
        color?: string | undefined;
        endAdornment?: string | React.ReactNode;
    };
}