import NodeFound from 'components/PageNodeFound';
import { Route, Routes } from 'react-router-dom';
import AddPage from './AddEdit';
import MainPage from './Main';

const Photos = ( props ) => {
    return (
        <Routes>
            <Route path="/" element={ <MainPage /> } />
            <Route path="/add" element={ <AddPage /> } />
            <Route path=":photoId" element={ <AddPage /> } />
            <Route element={ <NodeFound /> } />
        </Routes>
    );
};

export default Photos;