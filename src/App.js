import { Box } from '@mui/material';
import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import NodeFound from './components/PageNodeFound';
import Photos from './features/Photo/pages';

function App() {
    return (
        <Box className="App">
            <Suspense fallback={ <Box>....loading</Box> }>
                <BrowserRouter>
                    <Header />
                    <Routes>
                        {/* <Navigate replace from="/photo" to="/" /> */ }
                        <Route path='photos/*' element={ <Photos /> } />
                        <Route element={ <NodeFound /> } />
                    </Routes>
                </BrowserRouter>
            </Suspense>
        </Box>
    );
}

export default App;
