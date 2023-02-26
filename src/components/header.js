import { Box, Button, Stack, Typography } from '@mui/material'
import "../App.css"
import React from 'react'

const Header = ({ handleClick }) => {
    return (
        <Box className="header">
            <Button className="edit" onClick={handleClick}>EDIT</Button>
            <Typography variant='h3' paddingTop={3}>My redux </Typography>
            <Stack className='info-content'>
                <img src='https://demoda.vn/wp-content/uploads/2022/09/avatar-facebook-doc-ngau.jpg' alt='avatar' className='avatar' />
            </Stack>
        </Box>
    )
}

export default Header
