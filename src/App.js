import { Box, Container } from '@mui/material';
import './App.css';
import PostsList from './components/redux/postsList';

function App() {

    return (
        <Container >
            <Box className="App">
                <PostsList />
            </Box>
        </Container>
    );
}

export default App;
