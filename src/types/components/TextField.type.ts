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
    startAdornment?: string | React.ReactNode;

    InputProps?: {
        endAdornment?: string | React.ReactNode;
        startAdornment?: string | React.ReactNode;
    };
    placeholder?: string;
    sx?: boolean;
}
