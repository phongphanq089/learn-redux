import { Box, Button, FormControl, Grid, OutlinedInput, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "../App.css";
import { update } from "./redux/userSlices";

const imageAvatar = [
    "https://symbols.vn/wp-content/uploads/2021/11/Tong-hop-nhung-buc-Avatar-Free-Fire-chat.jpg",
    "https://demoda.vn/wp-content/uploads/2022/12/anh-avatar-ff-miguel-deo-vong-co.jpg",
    "https://symbols.vn/wp-content/uploads/2021/12/Mau-logo-Free-Fire-dep.jpg",
    "https://thpthoaminh.edu.vn/wp-content/uploads/2022/12/1671216891_42_222-Hinh-Anh-Avatar-FF-Dep-Chat-Ngat-AI-CUNG.jpg",
    "https://thao68.com/wp-content/uploads/2022/03/logo-gaming-free-fire-4.jpg",
    "https://vothisaucamau.edu.vn/wp-content/uploads/2022/12/1670579080_457_222-Hinh-Anh-Avatar-FF-Dep-Chat-Ngat-AI-CUNG.jpg"
];

const PageEdit = ( { handleClick } ) => {

    const user = useSelector( ( state ) => state.user );
    const dispath = useDispatch();
    const [ name, setName ] = useState( user.name );
    const [ age, setAge ] = useState( user.age );
    const [ about, setAbout ] = useState( user.about );
    const [ image, setImage ] = useState( user.avatar );
    const [ color, setColor ] = useState( user.themeColor );

    const handleSubmit = ( e ) => {
        e.preventDefault();
        handleClick();
        const updatedUser = ( {
            name: name,
            age: age,
            about: about,
            avatar: image,
            themeColor: color
        } );
        dispath( update( updatedUser ) );
    };
    return (
        <Box className="page-edit">
            <Button className='save-button' type="submit" onClick={ handleSubmit } >SAVE</Button>
            <Box className="form-edit">
                <Box
                    component="form"
                    onSubmit={ handleSubmit }
                    sx={ {
                        width: '100%', display: 'flex',
                        flexDirection: 'column', gap: '32px',
                    } }
                >
                    <TextField
                        label="Display Name"
                        variant="standard"
                        color="warning"
                        focused
                        defaultValue={ user.name }
                        onChange={ ( e ) => setName( e.target.value ) }
                        fullWidth
                    />
                    <TextField
                        label="Age"
                        defaultValue={ user.age }
                        variant="standard"
                        color="warning"
                        focused
                        onChange={ ( e ) => setAge( e.target.value ) }
                        fullWidth
                    />
                    <TextField
                        label="About"
                        defaultValue={ user.about }
                        color="secondary"
                        focused
                        onChange={ ( e ) => setAbout( e.target.value ) }
                        multiline
                        rows={ 5 }
                        fullWidth
                    />
                </Box>
                <Box className="profile-pictrue" my={ 3 } width="100%">
                    <Typography variant='h5' color="#fff">Profile pictrue</Typography>
                    <Grid container spacing={ 2 } className="list-avatar">
                        {
                            imageAvatar.map( ( item, index ) => {
                                return (
                                    <Grid item xs={ 6 } key={ index } className="avatar-item">
                                        <img
                                            src={ item }
                                            alt="avatar"
                                            className="image-item"
                                            onClick={ ( e ) => setImage( e.target.src ) }
                                        />
                                    </Grid>
                                );
                            } )
                        }
                    </Grid>
                </Box>
                <FormControl sx={ { paddingY: "30px" } }>
                    <OutlinedInput
                        placeholder="Please enter text"
                        type="color"
                        onChange={ ( e ) => setColor( e.target.value ) }
                    />
                </FormControl>
            </Box>
        </Box>
    );
};

export default PageEdit;
