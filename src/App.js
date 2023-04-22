import { Box, List, ListItem } from '@mui/material';
import { Suspense } from 'react';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import './App.css';
import NodeFound from './components/PageNodeFound';
import AddPage from './features/Photo/pages/AddEdit';

function App() {

    return (

        <Box className="App">
            <Suspense fallback={ <Box>....loading</Box> }>
                <BrowserRouter>
                    <List>
                        <ListItem>
                            <Link to="/photos">go to photo image</Link>
                        </ListItem>
                        <ListItem>
                            <Link to="/photos/add">go to photo add</Link>
                        </ListItem>
                        <ListItem>
                            <Link to="/photos/123">go to photo pages</Link>
                        </ListItem>
                    </List>
                    <Routes>
                        {/* <Navigate replace from="/photo" to="/" /> */ }
                        <Route path='/photos' Component={ AddPage } />
                        <Route Component={ NodeFound } />
                    </Routes>
                </BrowserRouter>
            </Suspense>
        </Box>
    );
}

export default App;
