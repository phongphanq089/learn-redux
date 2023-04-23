import { Box } from '@mui/material';
import Banner from 'components/Banner/Banner';
import PhotoForm from 'features/Photo/componets/PhotoForm/PhotoForm';

const AddPage = () => {
    return (
        <Box className="edit-page">
            <Banner title="Pick your amazing photo 😎" />
            <Box >
                <PhotoForm />
            </Box>
        </Box>
    );
};

export default AddPage;