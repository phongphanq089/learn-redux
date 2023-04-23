import { TextField } from "@mui/material";




const InputFields = ( props ) => {

    props = {
        type: 'text',
        label: '',
        placeholder: '',
        disabled: false,
    };
    const {
        type, placeholder, disabled,
    } = props;
    // const { name } = field;

    return (
        <TextField
            id="outlined-basic"
            placeholder={ placeholder }
            variant="outlined"
            disabled={ disabled }
        />
    );
};

export default InputFields;