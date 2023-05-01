import { TextField } from "@mui/material";
interface TextFieldInputProps {
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
function TextFieldComponent({
	type,
	name,
	label,
	field,
	form,
	endAdornment,
}: TextFieldInputProps): JSX.Element {
	const hasError =
		form.touched[field.name] && Boolean(form.errors[field.name]);

	return (
		<div>
			<TextField
				{...field}
				type={type}
				name={name}
				label={label}
				variant="outlined"
				fullWidth={true}
				error={hasError}
				helperText={hasError ? form.errors[field.name] : undefined}
				InputLabelProps={{
					style: {
						fontSize: "24px",
						color: "#8f8f8f",
						fontFamily: "Futura-Medium",
					},
				}}
				InputProps={{
					style: {
						color:
							form.touched[name] && form.errors[name]
								? "#db7f72"
								: undefined,
					},
					endAdornment: endAdornment,
				}}
			/>
		</div>
	);
}
export default TextFieldComponent;
