import { Box, Container } from '@mui/material';
import Banner from 'components/Banner/Banner';
import Images from 'constants/images';
import { Link } from 'react-router-dom';

const MainPage = () => {
    return (
        <Box className="Main-page">
            <Banner title="🎉 Your awesome photos 🎉" backgroundUrl={ Images.PINK_BG } />
            <Container>
                <Box textAlign="center">
                    <Link to="/photos/add">Add new photo</Link>
                </Box>
            </Container>
        </Box>
    );
};

export default MainPage;