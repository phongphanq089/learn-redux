import { Box, Button, FormControl, InputLabel, MenuItem, Select, Stack } from "@mui/material";
import Images from "constants/images";
import InputFields from "custom-fields/InputFields";
import { FastField, Form, Formik } from "formik";
import { useState } from "react";

const PhotoForm = () => {

    const initialValue = {
        title: "",
    };

    const [ age, setAge ] = useState( '' );

    const handleChange = ( event ) => {
        setAge( event.target.value );
    };

    return (
        <Formik initialValues={ initialValue }>
            { formikProp => {
                const { value, errors, touched } = formikProp;
                console.log( { value, errors, touched } );
                return (
                    <Form>
                        <Box
                            display="flex"
                            justifyContent="center"
                            my={ 9 }
                        >
                            <Stack direction="column" spacing={ 2 } >
                                <FastField
                                    name="title"
                                    component={ InputFields }
                                    label="Title"
                                    placeholder="Eg: Wow nature ..."
                                />
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={ age }
                                        label="Age"
                                        onChange={ handleChange }
                                    >
                                        <MenuItem value={ 10 }>Ten</MenuItem>
                                        <MenuItem value={ 20 }>Twenty</MenuItem>
                                        <MenuItem value={ 30 }>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                                <Button variant="contained" color="success">Random Photo</Button>
                                <Box>
                                    <img src={ Images.COLORFUL_BG } width="200px" height="300px" alt="COLORFUL_BG" />
                                </Box>
                                <Button variant="contained" color="secondary">Add to album</Button>
                            </Stack>
                        </Box>
                    </Form>
                );
            } }
        </Formik>
    );
};
export default PhotoForm;