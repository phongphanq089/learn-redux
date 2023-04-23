import { Box } from '@mui/material';
import React from 'react';
import "./Banner.scss";

const Banner = ( props ) => {
    const { title = "", backgroundUrl = "" } = props;

    const bannerStyle = backgroundUrl
        ? { backgroundImage: `url(${ backgroundUrl })` }
        : {};

    return (
        <Box className="banner" style={ bannerStyle }>
            <h1 className="banner__title">{ title }</h1>
        </Box>
    );
};

export default Banner;