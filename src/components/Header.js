import { Container, Stack, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Container>
            <Stack direction="row" justifyContent="space-between" alignItems="center" >
                <Typography variant='h4'>Learn React Redux</Typography>
                <NavLink to="/photos" className="header-link">
                    <Typography variant='h4'>Project Redux</Typography>
                </NavLink>
            </Stack>
        </Container>
    );
};

export default Header;