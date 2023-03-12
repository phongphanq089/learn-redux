import { Box, Button, Stack, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import "../App.css";

const Header = ( { handleClick } ) => {

    const user = useSelector( ( state ) => state.user );
    return (
        <Box className="header" backgroundColor={ `${ user.themeColor }` }>
            <Button className="edit" onClick={ handleClick }>EDIT</Button>
            <Typography variant='h3' paddingTop={ 3 }>My redux </Typography>
            <Stack className='info-content' direction="row" spacing={ 4 }>
                <img src={ user.avatar } alt='avatar' className='avatar' />
                <Box pt={ 5 }>
                    <Typography variant='h6'>{ user.name }</Typography>
                    <Typography variant='h6'>{ user.age }</Typography>
                    <Typography variant='h6'>{ user.about }</Typography>
                </Box>
            </Stack>
        </Box>
    );
};

export default Header;
